export interface IInventorySaleRow {
  product: string;
  brand: string;
  unit: 'Quilograma' | 'Litro' | 'Unidade' | 'Metro linear' | 'Metro quadrado'
    | 'Metro cúbico' | 'Par' | 'Quilowatt hora';
  unitValue: number;
  unitiesSold: number;
  totalValue: number;
  responsible: string;
  transactionCode: number;
  transactionDate: Date;
  nfeCode: number;
}
