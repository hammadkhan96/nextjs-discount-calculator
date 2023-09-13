import { Body, Controller, Post, Res } from '@nestjs/common';
import { CalculateDTO } from './calculator.dto';
import { CalculatorService } from './calculator.service';
import { Response } from 'express';

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}

    @Post()
    calculate(@Body() calculateDTO:CalculateDTO, @Res() response: Response ){

        let data = this.calculatorService.calculate(calculateDTO)

        if(!data) {
            return response.status(400).json({
                message: "Calculation failed.",
                data: data
            })
        }
        
        return {
            message: "Calculation successfull",
            data: data
        } 
    }

}
