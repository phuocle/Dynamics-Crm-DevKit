﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPartner_Application_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Indicates the application role. */
			ApplicationRole: DevKit.Controls.OptionSet;
			/** Name of Partner Application. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Principal ID of the partner application. */
			PrincipalId: DevKit.Controls.String;
			/** Select whether the partner application uses an authorization server. */
			UseAuthorizationServer: DevKit.Controls.Boolean;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Shows the status of the partner application. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPartner_Application_Main_Form extends DevKit.IForm {
		/**
		* Partner Application Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Partner_Application_Main_Form */
		Body: DevKit.FormPartner_Application_Main_Form.Body;
		/** The Footer section of form Partner_Application_Main_Form */
		Footer: DevKit.FormPartner_Application_Main_Form.Footer;
		/** The Process of form Partner_Application_Main_Form */
		Process: DevKit.FormPartner_Application_Main_Form.Process;
		/** The SidePanes of form Partner_Application_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	class PartnerApplicationApi {
		/**
		* DynamicsCrm.DevKit PartnerApplicationApi
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
		/** Indicates the application role. */
		ApplicationRole: OptionSet.PartnerApplication.ApplicationRole;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Contains the metadata URL. */
		MetadataUrl: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of Partner Application. */
		Name: string;
		/** Unique identifier of the organization associated with the record. */
		readonly OrganizationId: string;
		/** Unique identifier of the partner application. */
		PartnerApplicationId: string;
		/** Principal ID of the partner application. */
		PrincipalId: string;
		/** Indicates the realm. */
		Realm: string;
		/** Shows the status of the partner application. */
		readonly StateCode: OptionSet.PartnerApplication.StateCode;
		/** Select the partner application's status. */
		StatusCode: OptionSet.PartnerApplication.StatusCode;
		/** Shows the tenant ID. */
		TenantId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Select whether the partner application uses an authorization server. */
		UseAuthorizationServer: boolean;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the partner application. */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace PartnerApplication {
		enum ApplicationRole {
			/** 0 */
			Client,
			/** 1 */
			Server
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 2 */
			Disabled,
			/** 1 */
			Enabled
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}