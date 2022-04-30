import { controller, DarukContext, get } from 'daruk';

@controller()
export default class Index {
  @get('/')
  public async index(ctx: DarukContext): Promise<void> {
    ctx.body = 'hello world';
  }
}
