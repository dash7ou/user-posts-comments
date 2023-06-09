import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { commentsProviders } from './comments.providers';

@Module({
  providers: [CommentsService, ...commentsProviders],
  controllers: [CommentsController]
})
export class CommentsModule {}
