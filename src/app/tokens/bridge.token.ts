import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';

import { BridgeService } from '../services/bridge.service';
import { IBridgeService } from '../types';

export const BRIDGE_SERVICE = new InjectionToken<IBridgeService>(
  'BRIDGE_SERVICE',
  {
    factory: () => {
      const http = inject(HttpClient);

      return new BridgeService(http);
    },
  }
);
