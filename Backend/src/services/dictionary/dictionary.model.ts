import { ILike } from 'typeorm';
import Model from '../model'; 
import Dictionary from './dictionary.entity';

class DictionaryModel extends Model {

    constructor() {
        super(Dictionary);
    }

    public createRecord = async (dictionary: Dictionary) => {
        return await this.repository.save(await this.repository.create(dictionary));
    }

    public updateRecord = async (dictionary: Dictionary, updates: any) => {
        return await this.manager.update(Dictionary, dictionary, { ...updates, updated_at: this.currentTimestamp });
    }

    public getManyRecords = async (order_by: string, order: string, page: number, size: number, query: string) => {
        const searchQuery = (query) ? { where: { word: {'$regex' : `${query}`, '$options' : 'i'}}} : {}
        return await this.manager.find(Dictionary, {
            ...this.paginationOptions(order_by, order, page, size),
            ...searchQuery
        });
    }

    public getOneRecordById = async (id: string) => {
        return await this.manager.findOne(Dictionary, id);
    }

    public deleteRecordById = async (id: string) => {
        return await this.manager.delete(Dictionary, id);
    }

}

export default DictionaryModel;