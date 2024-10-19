import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class PomodoroDto {
    @IsOptional()
    @IsBoolean()
    isCompleted: boolean
}

export class PomodoroRoundDto {
    @IsNumber()
    totalSeconds: number

    @IsOptional()
    @IsBoolean()
    isCompleted: boolean
}
