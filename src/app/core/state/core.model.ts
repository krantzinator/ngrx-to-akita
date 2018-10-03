import { ID } from '@datorama/akita';

export interface Core {
  id: ID;
}

/**
 * A factory function that creates Core
 */
export function createCore(params: Partial<Core>) {
  return {

  } as Core;
}
