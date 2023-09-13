import { Body, Injectable } from '@nestjs/common';
import { CalculateDTO } from './calculator.dto';

@Injectable()
export class CalculatorService {

    calculate(calculateDTO: CalculateDTO ): any {
        let response = {};
        if (calculateDTO.discount_type == 'percentage') {
            let savedAmount: number = parseFloat(((calculateDTO.total_amount * calculateDTO.discounted_amount) / 100).toFixed(2));
            let afterDiscount: number = parseFloat((calculateDTO.total_amount - savedAmount).toFixed(2));
            return {
                savedAmount,
                afterDiscount,
            }
        } else if (calculateDTO.discount_type == 'fixed') {
            let afterDiscount: number = parseFloat((calculateDTO.total_amount - calculateDTO.discounted_amount).toFixed(2));
            let savedAmount: number = parseFloat((calculateDTO.total_amount - afterDiscount).toFixed(2));
            return {
                savedAmount,
                afterDiscount,
            }
        }
        return null
    }
}
