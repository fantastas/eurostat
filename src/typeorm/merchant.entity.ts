import { Column, Entity } from 'typeorm';

@Entity()
export class Merchant {
  //   @PrimaryGeneratedColumn({
  //     type: 'bigint',
  //     name: 'user_id',
  //   })
  //   id: number;

  @Column({
    name: 'ParentName',
    nullable: false,
    default: '',
  })
  ParentName: string;

  @Column({
    name: 'GrandParent',
    nullable: false,
    default: '',
  })
  GrandParent: string;
}
