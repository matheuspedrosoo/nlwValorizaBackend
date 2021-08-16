import { Request, Response, response } from 'express';
import { ListTagService } from '../services/ListTagService';

class ListTagController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagService();

    const tags = await listTagService.execute();

    return response.json(tags);
  }
}
export { ListTagController };
