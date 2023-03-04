import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "products",
})
export class Products extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  price!: number;
}
