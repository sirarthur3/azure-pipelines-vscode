export class Messages {
    public static acquireTokenFromRefreshTokenFailed: string = 'Acquiring token with refresh token failed. Error: %s.';
    public static addYmlFile: string = 'Add Azure Pipeline Yml definition.';
    public static analyzingRepo: string = 'Analyzing your repo';
    public static appKindIsNotSupported: string = 'App of kind: %s is not yet supported.';
    public static azureAccountExntesionUnavailable: string = 'Azure-Account extension could not be fetched. Kindly check it is installed and activated.';
    public static azureLoginRequired: string = 'Kindly sign in to your Azure Account before going forward.';
    public static branchRemoteMissing: string = `The current branch does not have a remote tracking branch and the selected repository has no remotes. Kindly, [set a remote tracking branch](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---track) with [Azure Repos](https://docs.microsoft.com/en-us/azure/devops/repos/get-started) or [Github](https://guides.github.com/activities/hello-world/) to procceed.`;
    public static browsePipeline: string = 'Browse Pipeline';
    public static cannotAddFileRemoteMissing: string = 'Cannot add yml file to your git repository, remote is not set';
    public static cannotIdentifyRespositoryDetails: string = 'Could not identify repository details. Ensure your git repo is managed with [Azure Repos](https://docs.microsoft.com/en-us/azure/devops/repos/get-started) or [Github](https://guides.github.com/activities/hello-world/)';
    public static commitAndPush: string = 'Commit & Push';
    public static configuringPipelineAndDeployment: string = 'Configuring Azure DevOps Pipeline and proceeding to deployment...';
    public static couldNotAuthorizeEndpoint: string = 'Could not authorize endpoint for use in Pipelines.';
    public static creatingAzureDevOpsOrganization: string = 'Creating Azure DevOps organization.';
    public static creatingAzureServiceConnection: string = 'Connecting azure pipelines with your subscription: %s';
    public static creatingGitHubServiceConnection: string = 'Creating GitHub service connection';
    public static discardPipeline: string = 'Discard Pipeline';
    public static enterAzureDevOpsOrganizationName: string = 'Azure DevOps organization name where your pipeline will be hosted';
    public static enterGitHubPat: string = 'Enter GitHub PAT token';
    public static failedToCreateAzureDevOpsProject: string = 'Failed to create project for Azure DevOps organization. Error: %s.';
    public static failedToCreateAzurePipeline: string = 'Failed to configure Azure pipeline. Error: %s';
    public static githubPatTokenHelpMessage: string = 'GitHub PAT token with following permissions: full access of repository webhooks and services, read and write access to all repositories data.';
    public static modifyAndCommitFile: string = 'Modify and save your yaml file. %s will commit this file, push the branch \'%s\' to remote \'%s\' and proceed with deployment.';
    public static noAgentQueueFound: string = 'No Agent Queue found with pool name: %s';
    public static notAGitRepository: string = 'Selected workspace is not a [git](https://git-scm.com/docs/git) repository. Please select a git repository.';
    public static notAzureRepoUrl: string = 'Repo Url is not of Azure Repos type.';
    public static noWorkSpaceSelectedError: string = 'You need to select a workspace folder to configure pipeline.';
    public static operationCancelled: string = 'Operation cancelled.';
    public static operationTimedOut: string = 'Operation timed out.';
    public static organizationNameReservedMessage: string = 'The organization name %s is not available. Please try another organization name';
    public static organizationNameStaticValidationMessage: string = 'Organization names must start and end with a letter or number and can contain only letters, numbers, and hyphens';
    public static pipelineSetupSuccessfully: string = 'Azure DevOps pipeline set up successfully !';
    public static remoteRepositoryNotConfigured: string = 'Remote repository is not configured. Manage your git repository with [Azure Repos](https://docs.microsoft.com/en-us/azure/devops/repos/get-started) or [Github](https://guides.github.com/activities/hello-world/)';
    public static resourceIdMissing: string = 'Required argument: resourceId, is missing. Kindly pass the argument for getting resource.';
    public static resourceTypeIsNotSupported: string = 'Resource of type: %s is not yet supported for configuring pipelines.';
    public static selectFolderLabel: string = 'Select source folder for configuring pipeline';
    public static selectOrganization: string = 'Select Azure DevOps Organization';
    public static selectPathToAppSourceCode: string = 'Select the path to your application source code.';
    public static selectPipelineTemplate: string = 'Select Azure pipelines template...';
    public static selectProject: string = 'Select Azure DevOps project';
    public static selectRemoteForBranch: string = 'Select the remote repository where you want to track your current branch';
    public static selectSubscription: string = 'Select Azure Subscription';
    public static selectWebApp: string = 'Select Web App';
    public static selectWorkspaceFolder: string = 'Select a folder from your workspace to deploy';
    public static signInLabel: string = 'Sign In';
    public static unableToCreateAzureServiceConnection: string = `Unable to create azure service connection.\nOperation Status: %s\nMessage: %s\nService connection is not in ready state.`;
    public static unableToCreateGitHubServiceConnection: string =`Unable to create azure service connection.\nOperation Status: %s\nService connection is not in ready state.`;
    public static commitFailedErrorMessage: string =`Commit failed due to error: %s`;

}
