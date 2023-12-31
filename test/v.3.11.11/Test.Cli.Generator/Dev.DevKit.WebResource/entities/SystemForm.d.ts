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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the parent form. */
		AncestorFormId: string;
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SystemForm.ComponentState;
		/** Description of the form or dashboard. */
		Description: string;
		/** Specifies the state of the form. */
		FormActivationState: OptionSet.SystemForm.FormActivationState;
		/** Unique identifier of the record type form. */
		FormId: string;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly FormIdUnique: string;
		/** Json representation of the form layout. */
		FormJson: string;
		/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		FormPresentation: OptionSet.SystemForm.FormPresentation;
		/** XML representation of the form layout. */
		FormXml: string;
		/** formXml diff as in a managed solution. for internal use only */
		readonly FormXmlManaged: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		IsAIRMerged: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Information that specifies whether the form or the dashboard is the system default. */
		IsDefault: boolean;
		/** Information that specifies whether the dashboard is enabled for desktop. */
		IsDesktopEnabled: boolean;
		readonly IsManaged: boolean;
		/** Information that specifies whether the dashboard is enabled for tablet. */
		IsTabletEnabled: boolean;
		/** Name of the form. */
		Name: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		readonly PublishedOn_UtcDateAndTime: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Type of the form, for example, Dashboard or Preview. */
		Type: OptionSet.SystemForm.Type;
		/** Unique Name */
		UniqueName: string;
		/** For internal use only. */
		Version: number;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the parent form. */
			readonly AncestorFormId: string;
			/** Information that specifies whether this component can be deleted. */
			readonly CanBeDeleted: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Description of the form or dashboard. */
			readonly Description: string;
			/** Specifies the state of the form. */
			readonly FormActivationState: string;
			/** Unique identifier of the record type form. */
			readonly FormId: string;
			/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
			readonly FormIdUnique: string;
			/** Json representation of the form layout. */
			readonly FormJson: string;
			/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
			readonly FormPresentation: string;
			/** XML representation of the form layout. */
			readonly FormXml: string;
			/** formXml diff as in a managed solution. for internal use only */
			readonly FormXmlManaged: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
			readonly IsAIRMerged: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Information that specifies whether the form or the dashboard is the system default. */
			readonly IsDefault: string;
			/** Information that specifies whether the dashboard is enabled for desktop. */
			readonly IsDesktopEnabled: string;
			readonly IsManaged: string;
			/** Information that specifies whether the dashboard is enabled for tablet. */
			readonly IsTabletEnabled: string;
			/** Name of the form. */
			readonly Name: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly PublishedOn_UtcDateAndTime: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Type of the form, for example, Dashboard or Preview. */
			readonly Type: string;
			/** Unique Name */
			readonly UniqueName: string;
			/** For internal use only. */
			readonly Version: string;
			/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
			readonly VersionNumber: string;
		}
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
		enum ObjectTypeCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}