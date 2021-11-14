import { IsDefined, IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator";


export class CreateWordDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public word: string;

}

export class UpdateWordDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public word: string;

}
