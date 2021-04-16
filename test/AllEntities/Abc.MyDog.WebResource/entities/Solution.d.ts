//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormSolution_Information {
		interface tab_general_Sections {
			solution_information: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
		}
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections {
			solutionmarketplacesection: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab__9129B06A_8446_77D8_2BD2_027C5006BE41 extends DevKit.Controls.ITab {
			Section: tab__9129B06A_8446_77D8_2BD2_027C5006BE41_Sections;
		}
		interface Tabs {
			general: tab_general;
			_9129B06A_8446_77D8_2BD2_027C5006BE41: tab__9129B06A_8446_77D8_2BD2_027C5006BE41;
		}
		interface Body {
			Tab: Tabs;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** A link to an optional configuration page for this solution. */
			ConfigurationPageId: DevKit.Controls.Lookup;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** User display name for the solution. */
			FriendlyName: DevKit.Controls.String;
			/** Date and time when the solution was installed/upgraded. */
			InstalledOn: DevKit.Controls.Date;
			/** Indicates whether the solution is managed or unmanaged. */
			IsManaged: DevKit.Controls.Boolean;
			/** Unique identifier of the publisher. */
			PublisherId: DevKit.Controls.Lookup;
			/** The unique name of this solution */
			UniqueName: DevKit.Controls.String;
			/** Solution version, used to identify a solution for upgrades and hotfixes. */
			Version: DevKit.Controls.String;
		}
	}
	class FormSolution_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Solution_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Solution_Information */
		Body: MyDog.FormSolution_Information.Body;
	}
	class SolutionApi {
		/**
		* DynamicsCrm.DevKit SolutionApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** A link to an optional configuration page for this solution. */
		ConfigurationPageId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the user who created the solution. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the solution was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the solution. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description of the solution. */
		Description: DevKit.WebApi.StringValue;
		/** User display name for the solution. */
		FriendlyName: DevKit.WebApi.StringValue;
		/** Date and time when the solution was installed/upgraded. */
		InstalledOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Information about whether the solution is api managed. */
		IsApiManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution is internal or not. */
		IsInternal: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution is managed or unmanaged. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the solution is visible outside of the platform. */
		IsVisible: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the solution. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the solution was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the solution. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the solution. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the parent solution. Should only be non-null if this solution is a patch. */
		ParentSolutionId: DevKit.WebApi.LookupValueReadonly;
		PinpointAssetId: DevKit.WebApi.StringValueReadonly;
		/** Identifier of the publisher of this solution in Microsoft Pinpoint. */
		PinpointPublisherId: DevKit.WebApi.BigIntValueReadonly;
		/** Default locale of the solution in Microsoft Pinpoint. */
		PinpointSolutionDefaultLocale: DevKit.WebApi.StringValueReadonly;
		/** Identifier of the solution in Microsoft Pinpoint. */
		PinpointSolutionId: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the publisher. */
		PublisherId: DevKit.WebApi.LookupValue;
		PublisherIdOptionValuePrefix: DevKit.WebApi.IntegerValueReadonly;
		PublisherIdPrefix: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the solution. */
		SolutionId: DevKit.WebApi.GuidValue;
		/** Solution package source organization version */
		SolutionPackageVersion: DevKit.WebApi.StringValue;
		/** Solution Type */
		SolutionType: DevKit.WebApi.OptionSetValue;
		/** The template suffix of this solution */
		TemplateSuffix: DevKit.WebApi.StringValue;
		/** thumbprint of the solution signature */
		Thumbprint: DevKit.WebApi.StringValue;
		/** The unique name of this solution */
		UniqueName: DevKit.WebApi.StringValue;
		/** Date and time when the solution was updated. */
		UpdatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Contains component info for the solution upgrade operation */
		UpgradeInfo: DevKit.WebApi.StringValueReadonly;
		/** Solution version, used to identify a solution for upgrades and hotfixes. */
		Version: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Solution {
		enum SolutionType {
			/** 2 */
			Internal,
			/** 0 */
			None,
			/** 1 */
			Snapshot
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}