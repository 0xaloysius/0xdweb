//0x39660eEC3FBf0982ae11A1A0D4e69F4Aa79FCC31
//channelid 66822288c33fc818da59e2ab13b7feb046908d6ee86fac04d5c936fbd57b11e7

import React, { useEffect, useState } from "react"
import { ChatAndNotificationWidget } from "@pushprotocol/uiweb"
import * as PushAPI from "@pushprotocol/restapi"
import { IUser } from '@pushprotocol/restapi';

export default function ChatWidgetTest() {
  const librarySigner = library.getSigner()
  const [pvtKey, setPvtKey] = useState()

  useEffect(() => {
    ;async () => {
      const user = await PushAPI.user.get({ account: account, env })
      const pvtkey = null
      if (user?.encryptedPrivateKey) {
        const response = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account: account,
          signer: librarySigner,
          env,
          toUpgrade: true
        })
        setPvtKey(response)
      }
    }
  }, [account, env])
  const onClose = () => {
    console.log("in here widget")
  }

  return (
    <>
      <ChatAndNotificationWidget
        account={account}
        decryptedPgpPvtKey={pvtKey}
        signer={librarySigner}
        activeChat="0x3Cf13f6d91F50dca6eAD7356b78482c54CDd95ff"
      />
    </>
  )
}
