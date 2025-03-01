import * as gcp from "@pulumi/gcp";

// passphrase: s~#Oax"(7x[4~2Fd

const gpcProjectId = "vy9w352z"
const gpcProjectName = "weeker-review"
const gcpOrganizationId = "946932013208"
const gcpBillingAccountId = "0140BA-67368F-4080C1"
const gcpStorageBucketPulumiStateId = "c16h348t"
const gcpLocation = "europe-west1"

const gcpProject = new gcp.organizations.Project("gcp-project", {
    projectId: gpcProjectId,
    name: gpcProjectName,
    orgId: gcpOrganizationId,
    billingAccount: gcpBillingAccountId,
});

const gcpStorageBucketPulumiState = new gcp.storage.Bucket("gcp-storage-bucket-pulumi-state", {
    project: gcpProject.projectId,
    name: gcpStorageBucketPulumiStateId,
    forceDestroy: false,
    location: "EU",
    storageClass: "STANDARD",
});

const enableCloudRun = new gcp.projects.Service("EnableCloudRun", {
    project: gcpProject.projectId,
    service: "run.googleapis.com",
});

const helloService = new gcp.cloudrun.Service("hello", {
    project: gcpProject.projectId,
    location: gcpLocation,
    template: {
        spec: {
            containers: [
                { image: "gcr.io/cloudrun/hello" },
            ],
        },
    },
}, {
    dependsOn: [enableCloudRun],
});

const iamHello = new gcp.cloudrun.IamMember("hello-everyone", {
    project: gcpProject.projectId,
    location: gcpLocation,
    service: helloService.name,
    role: "roles/run.invoker",
    member: "allUsers",
});

export const helloUrl = helloService.statuses[0].url;
