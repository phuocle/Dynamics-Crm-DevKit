﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class WizardPageApi {
		/**
		* DynamicsCrm.DevKit WizardPageApi
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
		/** Unique identifier of the user who created the wizard page. */
		readonly CreatedBy: string;
		/** Date and time when the wizard page was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the wizardpage. */
		readonly CreatedOnBehalfBy: string;
		/** Unique identifier of the user who last modified the wizard page. */
		readonly ModifiedBy: string;
		/** Date and time when the wizard page was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the wizardpage. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization. */
		readonly OrganizationId: string;
		/** Data to post to the wizard page when requesting the page. */
		PageDataToPost: string;
		/** Sequence number of the wizard page. */
		PageSequenceNumber: number;
		/** URL for the wizard page. */
		PageUrl: string;
		readonly VersionNumber: number;
		/** Unique identifier of the wizard associated with this wizard page. */
		WebWizardId: string;
		/** Unique identifier of the wizard page. */
		WizardPageId: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the wizard page. */
			readonly CreatedBy: string;
			/** Date and time when the wizard page was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the wizardpage. */
			readonly CreatedOnBehalfBy: string;
			/** Unique identifier of the user who last modified the wizard page. */
			readonly ModifiedBy: string;
			/** Date and time when the wizard page was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the wizardpage. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier of the organization. */
			readonly OrganizationId: string;
			/** Data to post to the wizard page when requesting the page. */
			readonly PageDataToPost: string;
			/** Sequence number of the wizard page. */
			readonly PageSequenceNumber: string;
			/** URL for the wizard page. */
			readonly PageUrl: string;
			readonly VersionNumber: string;
			/** Unique identifier of the wizard associated with this wizard page. */
			readonly WebWizardId: string;
			/** Unique identifier of the wizard page. */
			readonly WizardPageId: string;
		}
	}
}
declare namespace OptionSet {
	namespace WizardPage {
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