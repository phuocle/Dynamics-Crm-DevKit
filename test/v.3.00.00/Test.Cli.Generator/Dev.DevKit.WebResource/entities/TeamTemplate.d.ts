//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormTeamTemplate {
		interface tab_general_Sections {
			Access_Rights: DevKit.Controls.Section;
			Description: DevKit.Controls.Section;
			General: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Default access rights mask for the access teams associated with entity instances. */
			DefaultAccessRightsMask: DevKit.Controls.Integer;
			/** Type additional information that describes the team. */
			Description: DevKit.Controls.String;
			/** Object type code of entity which is enabled for access teams */
			ObjectTypeCode: DevKit.Controls.Integer;
			/** Type the name of the team template. */
			TeamTemplateName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormTeamTemplate extends DevKit.IForm {
		/**
		* TeamTemplate [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TeamTemplate */
		Body: DevKit.FormTeamTemplate.Body;
		/** The Process of form TeamTemplate */
		Process: DevKit.FormTeamTemplate.Process;
		/** The SidePanes of form TeamTemplate */
		SidePanes: DevKit.SidePanes;
	}
	class TeamTemplateApi {
		/**
		* DynamicsCrm.DevKit TeamTemplateApi
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
		/** Unique identifier of the user who created the team template. */
		readonly CreatedBy: string;
		/** Date and time when the team template was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the team template. */
		readonly CreatedOnBehalfBy: string;
		/** Default access rights mask for the access teams associated with entity instances. */
		DefaultAccessRightsMask: number;
		/** Type additional information that describes the team. */
		Description: string;
		/** Information about whether this team template is user-defined or system-defined. */
		readonly IsSystem: boolean;
		/** Unique identifier of the user who last modified the team template. */
		readonly ModifiedBy: string;
		/** Date and time when the team template was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the team template. */
		readonly ModifiedOnBehalfBy: string;
		/** Object type code of entity which is enabled for access teams */
		ObjectTypeCode: number;
		/** Unique identifier of the team template. */
		TeamTemplateId: string;
		/** Type the name of the team template. */
		TeamTemplateName: string;
		/** Version number for team template. */
		readonly versionnumber: number;
	}
}
declare namespace OptionSet {
	namespace TeamTemplate {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}