//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ProcessStageApi {
		/**
		* DynamicsCrm.DevKit ProcessStageApi
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
		/** Step metadata for process stage */
		readonly ClientData: string | null;
		/** The connector associated with the stage. */
		Connector: string | null;
		/** Whether the stage is a trigger */
		IsTrigger: boolean | null;
		/** The operation id of the stage */
		OperationId: string | null;
		/** The operation kind */
		OperationKind: OptionSet.ProcessStage.OperationKind | null;
		/** The type of the operation */
		OperationType: OptionSet.ProcessStage.OperationType | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Select the business unit that owns the record. */
		readonly OwningBusinessUnit: string | null;
		/** The parameter name. */
		ParameterName: string | null;
		/** The parameter value. */
		ParameterValue: string | null;
		/** The parent stage for the parameter. */
		ParentProcessStageId: string | null;
		/** Shows the ID of the process. */
		ProcessId: string | null;
		/** Shows the ID of the process stage record. */
		ProcessStageId: string | null;
		/** Select the category of the sales process. */
		StageCategory: OptionSet.ProcessStage.StageCategory | null;
		/** Type a name for the process stage. */
		StageName: string | null;
		/** Version number of the process stage. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Step metadata for process stage */
			readonly ClientData: string;
			/** The connector associated with the stage. */
			readonly Connector: string;
			/** Whether the stage is a trigger */
			readonly IsTrigger: string;
			/** The operation id of the stage */
			readonly OperationId: string;
			/** The operation kind */
			readonly OperationKind: string;
			/** The type of the operation */
			readonly OperationType: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Select the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** The parameter name. */
			readonly ParameterName: string;
			/** The parameter value. */
			readonly ParameterValue: string;
			/** The parent stage for the parameter. */
			readonly ParentProcessStageId: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Shows the ID of the process stage record. */
			readonly ProcessStageId: string;
			/** Select the category of the sales process. */
			readonly StageCategory: string;
			/** Type a name for the process stage. */
			readonly StageName: string;
			/** Version number of the process stage. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessStage {
		enum OperationKind {
			/** AddToTime = 473330011*/
			AddToTime = 473330011,
			/** Alert = 473330005*/
			Alert = 473330005,
			/** ApiConnection = 473330004*/
			ApiConnection = 473330004,
			/** AzureMonitorAlert = 473330013*/
			AzureMonitorAlert = 473330013,
			/** Button = 473330003*/
			Button = 473330003,
			/** ConvertTimeZone = 473330008*/
			ConvertTimeZone = 473330008,
			/** CurrentTime = 473330007*/
			CurrentTime = 473330007,
			/** EventGrid = 473330006*/
			EventGrid = 473330006,
			/** FormatNumber = 473330024*/
			FormatNumber = 473330024,
			/** Geofence = 473330019*/
			Geofence = 473330019,
			/** GetFutureTime = 473330009*/
			GetFutureTime = 473330009,
			/** GetPastTime = 473330010*/
			GetPastTime = 473330010,
			/** Http = 473330000*/
			Http = 473330000,
			/** IndexOf = 473330021*/
			IndexOf = 473330021,
			/** JsonToJson = 473330015*/
			JsonToJson = 473330015,
			/** JsonToText = 473330016*/
			JsonToText = 473330016,
			/** ODataOpenApiConnection = 473330020*/
			ODataOpenApiConnection = 473330020,
			/** PowerApp = 473330001*/
			PowerApp = 473330001,
			/** PowerAppV2 = 473330002*/
			PowerAppV2 = 473330002,
			/** PowerPages = 473330026*/
			PowerPages = 473330026,
			/** SecurityCenterAlert = 473330014*/
			SecurityCenterAlert = 473330014,
			/** Skills = 473330025*/
			Skills = 473330025,
			/** Substring = 473330022*/
			Substring = 473330022,
			/** SubtractFromTime = 473330012*/
			SubtractFromTime = 473330012,
			/** TeamsWebhook = 473330027*/
			TeamsWebhook = 473330027,
			/** VirtualAgent = 473330023*/
			VirtualAgent = 473330023,
			/** XmlToJson = 473330017*/
			XmlToJson = 473330017,
			/** XmlToText = 473330018*/
			XmlToText = 473330018
		}
		enum OperationType {
			/** ApiApp = 473330001*/
			ApiApp = 473330001,
			/** ApiConnection = 473330006*/
			ApiConnection = 473330006,
			/** ApiConnectionNotification = 473330050*/
			ApiConnectionNotification = 473330050,
			/** ApiConnectionWebhook = 473330009*/
			ApiConnectionWebhook = 473330009,
			/** ApiManagement = 473330016*/
			ApiManagement = 473330016,
			/** AppendToArrayVariable = 473330037*/
			AppendToArrayVariable = 473330037,
			/** AppendToStringVariable = 473330038*/
			AppendToStringVariable = 473330038,
			/** As2Decode = 473330045*/
			As2Decode = 473330045,
			/** As2Encode = 473330046*/
			As2Encode = 473330046,
			/** Batch = 473330039*/
			Batch = 473330039,
			/** Changeset = 473330051*/
			Changeset = 473330051,
			/** Compose = 473330013*/
			Compose = 473330013,
			/** DecrementVariable = 473330035*/
			DecrementVariable = 473330035,
			/** Expression = 473330042*/
			Expression = 473330042,
			/** FlatFileDecoding = 473330025*/
			FlatFileDecoding = 473330025,
			/** FlatFileEncoding = 473330018*/
			FlatFileEncoding = 473330018,
			/** Flow = 473330004*/
			Flow = 473330004,
			/** Foreach = 473330022*/
			Foreach = 473330022,
			/** Function = 473330015*/
			Function = 473330015,
			/** Http = 473330000*/
			Http = 473330000,
			/** HttpWebhook = 473330012*/
			HttpWebhook = 473330012,
			/** If = 473330021*/
			If = 473330021,
			/** IncrementVariable = 473330034*/
			IncrementVariable = 473330034,
			/** InitializeVariable = 473330033*/
			InitializeVariable = 473330033,
			/** IntegrationAccountArtifactLookup = 473330027*/
			IntegrationAccountArtifactLookup = 473330027,
			/** JavascriptCode = 473330044*/
			JavascriptCode = 473330044,
			/** Join = 473330031*/
			Join = 473330031,
			/** Liquid = 473330043*/
			Liquid = 473330043,
			/** Manual = 473330008*/
			Manual = 473330008,
			/** OpenApiConnection = 473330007*/
			OpenApiConnection = 473330007,
			/** OpenApiConnectionWebhook = 473330010*/
			OpenApiConnectionWebhook = 473330010,
			/** ParseJson = 473330029*/
			ParseJson = 473330029,
			/** Query = 473330014*/
			Query = 473330014,
			/** Recurrence = 473330002*/
			Recurrence = 473330002,
			/** Request = 473330020*/
			Request = 473330020,
			/** Response = 473330011*/
			Response = 473330011,
			/** RosettaNetDecode = 473330048*/
			RosettaNetDecode = 473330048,
			/** RosettaNetEncode = 473330047*/
			RosettaNetEncode = 473330047,
			/** RosettaNetWaitForResponse = 473330049*/
			RosettaNetWaitForResponse = 473330049,
			/** Scope = 473330019*/
			Scope = 473330019,
			/** Select = 473330032*/
			Select = 473330032,
			/** SendToBatch = 473330040*/
			SendToBatch = 473330040,
			/** SetVariable = 473330036*/
			SetVariable = 473330036,
			/** SlidingWindow = 473330041*/
			SlidingWindow = 473330041,
			/** SwiftEncode = 473330052*/
			SwiftEncode = 473330052,
			/** Switch = 473330028*/
			Switch = 473330028,
			/** Table = 473330030*/
			Table = 473330030,
			/** Terminate = 473330026*/
			Terminate = 473330026,
			/** Until = 473330023*/
			Until = 473330023,
			/** Wait = 473330005*/
			Wait = 473330005,
			/** Workflow = 473330003*/
			Workflow = 473330003,
			/** XmlValidation = 473330017*/
			XmlValidation = 473330017,
			/** Xslt = 473330024*/
			Xslt = 473330024
		}
		enum PrimaryEntityTypeCode {
		}
		enum StageCategory {
			/** Approval = 7*/
			Approval = 7,
			/** Close = 3*/
			Close = 3,
			/** Develop = 1*/
			Develop = 1,
			/** Identify = 4*/
			Identify = 4,
			/** Propose = 2*/
			Propose = 2,
			/** Qualify = 0*/
			Qualify = 0,
			/** Research = 5*/
			Research = 5,
			/** Resolve = 6*/
			Resolve = 6
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