import { IsIn, IsNotEmpty, IsNumber } from 'class-validator';

export class CalculateDTO{
    @IsNotEmpty() @IsNumber({}, {message: "Total Amount should be a valid number"})
    total_amount: number;
    
    @IsNotEmpty() @IsNumber({}, {message: "Discount Amount should be a valid number"})
    discounted_amount: number
    
    @IsNotEmpty() @IsIn(["percentage", "fixed"], {message: "Invalid discount type. "})
    discount_type: string;
  }