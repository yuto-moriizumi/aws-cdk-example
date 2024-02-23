import { Stack, StackProps } from "aws-cdk-lib";
import {
  Instance,
  InstanceType,
  MachineImage,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class GameServerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "VPC", {
      maxAzs: 1,
      subnetConfiguration: [
        {
          name: "Subnet",
          subnetType: SubnetType.PUBLIC,
        },
      ],
    });

    new Instance(this, "EC2", {
      vpc,
      instanceType: new InstanceType("t3a.large"),
      machineImage: MachineImage.latestAmazonLinux2(),
    });
  }
}
