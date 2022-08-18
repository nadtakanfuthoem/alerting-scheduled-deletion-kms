aws cloudformation create-stack --stack-name alerting-ct-logs --capabilities CAPABILITY_NAMED_IAM --template-body file://alerting-ct-logs.yaml --parameters ParameterKey=DestinationEmailAddress,ParameterValue=nadtakan.futhoem@tylertech.com ParameterKey=SNSTopicName,ParameterValue=alerting-ct-logs ParameterKey=EnableRemediation,ParameterValue=true ParameterKey=AutomationAssumeRole,ParameterValue=arn:aws:iam::373456726732:role/AutomationAssumeRole

Need to add creating IAM role, copy from arn:aws:iam::373456726732:role/AutomationAssumeRoleaws kms cancel-key-deletion --key-id 6e939c3f-d698-42ef-bac8-f6b917eab3a5

aws kms cancel-key-deletion --key-id 6e939c3f-d698-42ef-bac8-f6b917eab3a5

https://aws.amazon.com/premiumsupport/knowledge-center/change-sns-email-for-eventbridge/