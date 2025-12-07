// Source - https://stackoverflow.com/a
// Posted by devleo, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-21, License - CC BY-SA 4.0

import { Collection } from "discord.js";

// avoids type errors with typescript
declare module "discord.js" {
  export interface Client {
    commands: Collection<any, any>;
  }
}
