//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SystemFormApi {
		/**
		* DynamicsCrm.DevKit SystemFormApi
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
		/** Unique identifier of the parent form. */
		AncestorFormId: DevKit.WebApi.LookupValue;
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Description of the form or dashboard. */
		Description: DevKit.WebApi.StringValue;
		/** Specifies the state of the form. */
		FormActivationState: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the record type form. */
		FormId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		FormIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Json representation of the form layout. */
		FormJson: DevKit.WebApi.StringValue;
		/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		FormPresentation: DevKit.WebApi.OptionSetValue;
		/** XML representation of the form layout. */
		FormXml: DevKit.WebApi.StringValue;
		/** formXml diff as in a managed solution. for internal use only */
		FormXmlManaged: DevKit.WebApi.StringValueReadonly;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		IsAIRMerged: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Information that specifies whether the form or the dashboard is the system default. */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether the dashboard is enabled for desktop. */
		IsDesktopEnabled: DevKit.WebApi.BooleanValue;
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information that specifies whether the dashboard is enabled for tablet. */
		IsTabletEnabled: DevKit.WebApi.BooleanValue;
		/** Name of the form. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Type of the form, for example, Dashboard or Preview. */
		Type: DevKit.WebApi.OptionSetValue;
		/** Unique Name */
		UniqueName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		Version: DevKit.WebApi.IntegerValue;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SystemForm {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum FormActivationState {
			/** 1 */
			Active,
			/** 0 */
			Inactive
		}
		enum FormPresentation {
			/** 1 */
			AirForm,
			/** 0 */
			ClassicForm,
			/** 2 */
			ConvertedICForm
		}
		enum Type {
			/** 1 */
			AppointmentBook,
			/** 102 */
			AppointmentBookBackup,
			/** 11 */
			Card,
			/** 13 */
			Contextual_Dashboard,
			/** 0 */
			Dashboard,
			/** 8 */
			Dialog,
			/** 10 */
			InteractionCentricDashboard,
			/** 2 */
			Main,
			/** 12 */
			Main_Interactive_experience,
			/** 101 */
			MainBackup,
			/** 3 */
			MiniCampaignBO,
			/** 5 */
			Mobile_Express,
			/** 100 */
			Other,
			/** 103 */
			Power_BI_Dashboard,
			/** 4 */
			Preview,
			/** 7 */
			Quick_Create,
			/** 6 */
			Quick_View_Form,
			/** 9 */
			Task_Flow_Form
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00'}