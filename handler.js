const { KMSClient, CancelKeyDeletionCommand, EnableKeyCommand } = require("@aws-sdk/client-kms");

module.exports.handler = async (event) => {
  console.log('LogScheduledEvent');
  console.log('Received event:', JSON.stringify(event, null, 2));
  try {
    if (event.detail?.eventName === 'ScheduleKeyDeletion' && event.detail?.responseElements?.keyState === 'PendingDeletion') {
      const client = new KMSClient();
      const input = {
        KeyId: event.detail?.requestParameters?.keyId
      }
      const command = new CancelKeyDeletionCommand(input);
      const response = await client.send(command);
  
      if(response.$metadata?.httpStatusCode === 200 ) {
        console.log(await client.send(new EnableKeyCommand(input)));
      }
    }
  } catch (err) {
    console.error(err);
  }
};
