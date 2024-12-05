//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AppModuleApi {
		/**
		* DynamicsCrm.DevKit AppModuleApi
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
		/** This field is used to store AI generated Description for Model-driven App */
		aiappdescription: string;
		/** This field stores the Time when last AI App Description was generated. */
		aidescriptiongeneratedon_UtcDateAndTime: Date;
		/** This field is used to store App Graph for Model-driven App */
		appgraph: string;
		/** Unique identifier for entity instances */
		AppModuleId: string;
		/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleIdUnique: string;
		/** App Module Version */
		AppModuleVersion: string;
		/** App Module Xml Managed */
		AppModuleXmlManaged: string;
		/** Client Type such as Web or UCI */
		ClientType: number;
		/** For internal use only */
		readonly ComponentState: OptionSet.AppModule.ComponentState;
		/** Contains configuration XML */
		ConfigXML: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Description for entity */
		Description: string;
		/** App Module Descriptor */
		readonly Descriptor: string;
		/** App Module Event Handlers */
		EventHandlers: string;
		/** Form Factor */
		FormFactor: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** Is Default */
		IsDefault: boolean;
		/** Is Featured */
		IsFeatured: boolean;
		/** Is Managed */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of App Module */
		Name: string;
		/** App navigation type */
		NavigationType: OptionSet.AppModule.NavigationType;
		/** The client that this app is optimized for */
		OptimizedFor: string;
		/** Unique identifier of the organization associated with the app. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Internal use only */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Date and time when the record was published. */
		PublishedOn_UtcDateAndTime: Date;
		/** Unique identifier of the publisher. */
		PublisherId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Model-driven App */
		statecode: OptionSet.AppModule.statecode;
		/** Reason for the status of the Model-driven App */
		statuscode: OptionSet.AppModule.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique Name of App Module */
		UniqueName: string;
		/** Contains URL */
		URL: string;
		readonly VersionNumber: number;
		/** Unique identifier of the Web Resource */
		WebResourceId: string;
		/** Unique identifier of the Web Resource as Welcome Page Id */
		WelcomePageId: string;
		readonly FormattedValue: {
			/** This field is used to store AI generated Description for Model-driven App */
			readonly aiappdescription: string;
			/** This field stores the Time when last AI App Description was generated. */
			readonly aidescriptiongeneratedon_UtcDateAndTime: string;
			/** This field is used to store App Graph for Model-driven App */
			readonly appgraph: string;
			/** Unique identifier for entity instances */
			readonly AppModuleId: string;
			/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly AppModuleIdUnique: string;
			/** App Module Version */
			readonly AppModuleVersion: string;
			/** App Module Xml Managed */
			readonly AppModuleXmlManaged: string;
			/** Client Type such as Web or UCI */
			readonly ClientType: string;
			/** For internal use only */
			readonly ComponentState: string;
			/** Contains configuration XML */
			readonly ConfigXML: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description for entity */
			readonly Description: string;
			/** App Module Descriptor */
			readonly Descriptor: string;
			/** App Module Event Handlers */
			readonly EventHandlers: string;
			/** Form Factor */
			readonly FormFactor: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** Is Default */
			readonly IsDefault: string;
			/** Is Featured */
			readonly IsFeatured: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of App Module */
			readonly Name: string;
			/** App navigation type */
			readonly NavigationType: string;
			/** The client that this app is optimized for */
			readonly OptimizedFor: string;
			/** Unique identifier of the organization associated with the app. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Internal use only */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Date and time when the record was published. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Unique identifier of the publisher. */
			readonly PublisherId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Model-driven App */
			readonly statecode: string;
			/** Reason for the status of the Model-driven App */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique Name of App Module */
			readonly UniqueName: string;
			/** Contains URL */
			readonly URL: string;
			readonly VersionNumber: string;
			/** Unique identifier of the Web Resource */
			readonly WebResourceId: string;
			/** Unique identifier of the Web Resource as Welcome Page Id */
			readonly WelcomePageId: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModule {
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
		enum NavigationType {
			/** 1 */
			Multi_session,
			/** 0 */
			Single_session
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 3 */
			Deleted,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}