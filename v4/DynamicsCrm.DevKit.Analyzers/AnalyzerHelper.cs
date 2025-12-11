using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static class AnalyzerHelper
    {
        private const string MicrosoftCrmSdkMessages = "Microsoft.Crm.Sdk.Messages";
        private static readonly Regex EmptyStringPattern = new Regex(@"^\""(\s)*\""$", RegexOptions.Compiled | RegexOptions.Multiline);

        public static readonly HashSet<string> DeprecatedRequests = new HashSet<string>
        {
            $"{MicrosoftCrmSdkMessages}.AddProductToKitRequest",
            $"{MicrosoftCrmSdkMessages}.AddProductToKitResponse",
            $"{MicrosoftCrmSdkMessages}.AddSubstituteProductRequest",
            $"{MicrosoftCrmSdkMessages}.AddSubstituteProductResponse",
            $"{MicrosoftCrmSdkMessages}.AssociateEntitiesRequest",
            $"{MicrosoftCrmSdkMessages}.AssociateEntitiesResponse",
            $"{MicrosoftCrmSdkMessages}.CompoundCreateRequest",
            $"{MicrosoftCrmSdkMessages}.CompoundCreateResponse",
            $"{MicrosoftCrmSdkMessages}.CompoundUpdateRequest",
            $"{MicrosoftCrmSdkMessages}.CompoundUpdateResponse",
            $"{MicrosoftCrmSdkMessages}.ConvertKitToProductRequest",
            $"{MicrosoftCrmSdkMessages}.ConvertKitToProductResponse",
            $"{MicrosoftCrmSdkMessages}.ConvertProductToKitRequest",
            $"{MicrosoftCrmSdkMessages}.ConvertProductToKitResponse",
            $"{MicrosoftCrmSdkMessages}.DisassociateEntitiesRequest",
            $"{MicrosoftCrmSdkMessages}.DisassociateEntitiesResponse",
            $"{MicrosoftCrmSdkMessages}.ExecuteFetchRequest",
            $"{MicrosoftCrmSdkMessages}.ExecuteFetchResponse",
            $"{MicrosoftCrmSdkMessages}.IsBackOfficeInstalledRequest",
            $"{MicrosoftCrmSdkMessages}.IsBackOfficeInstalledResponse",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationReportRequest",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationReportResponse",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationTemplateRequest",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationTemplateResponse",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationReportRequest",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationReportResponse",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationTemplateRequest",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationTemplateResponse",
            $"{MicrosoftCrmSdkMessages}.RemoveProductFromKitRequest",
            $"{MicrosoftCrmSdkMessages}.RemoveProductFromKitResponse",
            $"{MicrosoftCrmSdkMessages}.RemoveSubstituteProductRequest",
            $"{MicrosoftCrmSdkMessages}.RemoveSubstituteProductResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveMembersTeamRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveMembersTeamResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryTeamsBusinessUnitRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryTeamsBusinessUnitResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryUsersBusinessUnitRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryUsersBusinessUnitResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveTeamsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveTeamsSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveUserSettingsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveUserSettingsSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetBusinessEquipmentRequest",
            $"{MicrosoftCrmSdkMessages}.SetBusinessEquipmentResponse",
            $"{MicrosoftCrmSdkMessages}.SetBusinessSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.SetBusinessSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetParentSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.SetParentSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetParentTeamRequest",
            $"{MicrosoftCrmSdkMessages}.SetParentTeamResponse",
            $"{MicrosoftCrmSdkMessages}.SetStateRequest",
            $"{MicrosoftCrmSdkMessages}.SetStateResponse",
            $"{MicrosoftCrmSdkMessages}.UpdateUserSettingsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.UpdateUserSettingsSystemUserResponse"
        };

        public static string RemoveQuote(string text)
        {
            if (text == null) return null;
            text = text.Substring(1);
            return text.Substring(0, text.Length - 1);
        }

        public static bool TestIsEmpty(string text)
        {
            if (string.IsNullOrEmpty(text)) return false;
            return EmptyStringPattern.IsMatch(text);
        }

        private const string MicrosoftXrmSdkMessages = "Microsoft.Xrm.Sdk.Messages";

        /// <summary>
        /// Batch request types that should not be used in plug-ins and workflow activities.
        /// Based on: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin
        /// </summary>
        public static readonly HashSet<string> BatchRequestTypes = new HashSet<string>
        {
            $"{MicrosoftXrmSdkMessages}.ExecuteMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.ExecuteTransactionRequest",
            $"{MicrosoftXrmSdkMessages}.CreateMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.UpdateMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.UpsertMultipleRequest"
        };
    }
}
