import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { ExtendedEntity } from '../shared';
import { UserEntity } from 'src/user/user.entity';
import { PostEntity } from './post.entity';

@Entity({ name: 'postvotes' })
@Index(['userId', 'postId'])
@Index(['direction', 'postId'])
export class PostVoteEntity extends ExtendedEntity {
  @Column('integer')
  direction!: number;

  @ManyToOne(
    () => UserEntity,
    user => user.posts,
  )
  user!: UserEntity;

  @ManyToOne(
    () => PostEntity,
    post => post.votes,
  )
  post!: PostEntity;
}
