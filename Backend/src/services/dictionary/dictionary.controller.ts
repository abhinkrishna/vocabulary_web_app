import { NextFunction, Request, Response } from "express";
import { Exception400, Exception404 } from "../../exceptions/exceptions";
import OxfordAPIUtility from "../../utils/oxford_utility";
import Controller from "../controller";
import Dictionary from "./dictionary.entity";
import DictionaryModel from "./dictionary.model";
class DictionaryController extends Controller {
    private oxfordUtility: OxfordAPIUtility;
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next, Dictionary, DictionaryModel);
        this.oxfordUtility = new OxfordAPIUtility();
    }

    /**
     * Get word details from oxford API
     * Add details to mongo db 
     */
    public create = async () => {
        const regData: any = this.body;
        const data: Dictionary = await this.proccessData(regData);

        // create
        const dictionary = await (this.model as DictionaryModel).createRecord(data);
        if (!dictionary) throw new Exception400('Error adding to dictionary.');

        this.success201(dictionary, 'Successfully added.');
    }

    /**
     * Read one record from mongo db
     */
    public readOne = async () => {
        const { id } = this.params;

        const dictionary = await (this.model as DictionaryModel).getOneRecordById(id);
        if (!dictionary) throw new Exception404('Record not found.');

        this.success200(dictionary, 'Successfully fetched.');
    }

    /**
     * Read many records from mongo db with 
     * pagination and search option
     */
    public readMany = async () => {
        const { order_by, order, page, size, query } = this.query;

        const result = await (this.model as DictionaryModel).getManyRecords(order_by, order, page, size, query);
        if ( !result ) throw new Exception400('Something went wrong.');

        this.success200({ result }, 'Successfully fetched.');
    }

    /**
     * Update a word detail from oxford API
     */
    public update = async () => {
        const { id } = this.params;
        const regData = this.body;
        let updatedData;

        const data = await this.proccessData(regData);

        // Find record
        const dictionary = await (this.model as DictionaryModel).getOneRecordById(id);
        if ( !dictionary ) throw new Exception404('Record not found.');

        try {
            await (this.model as DictionaryModel).updateRecord(dictionary, data);
            updatedData = await (this.model as DictionaryModel).getOneRecordById(id);
        } catch (error) {
            throw new Exception400('Update failed.');
        }

        this.success200(updatedData, 'Successfully updated.');
    }

    /**
     * Delete a word details from database
     */
    public delete = async () => {
        const { id } = this.params;

        try {
            await (this.model as DictionaryModel).deleteRecordById(id);
        } catch (error) {
            throw new Exception400('Somthing went wrong.');
        }

        this.success200({ id }, 'Successfully deleted.');
    }

    /**
     * @param word : eg. "hello"
     * @returns data with details fetched from Oxford API
     */
    private proccessData = async (data: Dictionary) => {
        try {
            data.cache = await this.oxfordUtility.getEntries(data.word) as object;
        } catch (error: any) {
            if (error.response.status === 404) throw new Exception404(error.response.data.error);
            else throw new Exception400('Something went wrong.');
        }
        return data;
    }

}

export default DictionaryController;