//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SystemFormApi {
		/**
		* DynamicsCrm.DevKit SystemFormApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the parent form. */
		AncestorFormId: string | null;
		/** Information that specifies whether this component can be deleted. */
		CanBeDeleted: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SystemForm.ComponentState | null;
		/** Description of the form or dashboard. */
		Description: string | null;
		/** Specifies the state of the form. */
		FormActivationState: OptionSet.SystemForm.FormActivationState | null;
		/** Unique identifier of the record type form. */
		FormId: string | null;
		/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
		readonly FormIdUnique: string | null;
		/** Json representation of the form layout. */
		FormJson: string | null;
		/** Specifies whether this form is in the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		FormPresentation: OptionSet.SystemForm.FormPresentation | null;
		/** XML representation of the form layout. */
		FormXml: string | null;
		/** formXml diff as in a managed solution. for internal use only */
		readonly FormXmlManaged: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Specifies whether this form is merged with the updated UI layout in Microsoft Dynamics CRM 2015 or Microsoft Dynamics CRM Online 2015 Update. */
		IsAIRMerged: boolean | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Information that specifies whether the form or the dashboard is the system default. */
		IsDefault: boolean | null;
		/** Information that specifies whether the dashboard is enabled for desktop. */
		IsDesktopEnabled: boolean | null;
		readonly IsManaged: boolean | null;
		/** Information that specifies whether the dashboard is enabled for tablet. */
		IsTabletEnabled: boolean | null;
		/** Name of the form. */
		Name: string | null;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		readonly PublishedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Type of the form, for example, Dashboard or Preview. */
		Type: OptionSet.SystemForm.Type | null;
		/** Unique Name */
		UniqueName: string | null;
		/** For internal use only. */
		Version: number | null;
		/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum FormActivationState {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 0*/
			Inactive = 0
		}
		enum FormPresentation {
			/** AirForm = 1*/
			AirForm = 1,
			/** ClassicForm = 0*/
			ClassicForm = 0,
			/** ConvertedICForm = 2*/
			ConvertedICForm = 2
		}
		enum ObjectTypeCode {
		}
		enum Type {
			/** AppointmentBook = 1*/
			AppointmentBook = 1,
			/** AppointmentBookBackup = 102*/
			AppointmentBookBackup = 102,
			/** Card = 11*/
			Card = 11,
			/** Contextual_Dashboard = 13*/
			Contextual_Dashboard = 13,
			/** Dashboard = 0*/
			Dashboard = 0,
			/** Dialog = 8*/
			Dialog = 8,
			/** InteractionCentricDashboard = 10*/
			InteractionCentricDashboard = 10,
			/** Main = 2*/
			Main = 2,
			/** Main_Interactive_experience = 12*/
			Main_Interactive_experience = 12,
			/** MainBackup = 101*/
			MainBackup = 101,
			/** MiniCampaignBO = 3*/
			MiniCampaignBO = 3,
			/** Mobile_Express = 5*/
			Mobile_Express = 5,
			/** Other = 100*/
			Other = 100,
			/** Power_BI_Dashboard = 103*/
			Power_BI_Dashboard = 103,
			/** Preview = 4*/
			Preview = 4,
			/** Quick_Create = 7*/
			Quick_Create = 7,
			/** Quick_View_Form = 6*/
			Quick_View_Form = 6,
			/** Task_Flow_Form = 9*/
			Task_Flow_Form = 9
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}