

import { http, createConfig } from 'wagmi'
import { rootstockTestnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [rootstockTestnet],
  transports: {
    [rootstockTestnet.id]: http(),
  },
})