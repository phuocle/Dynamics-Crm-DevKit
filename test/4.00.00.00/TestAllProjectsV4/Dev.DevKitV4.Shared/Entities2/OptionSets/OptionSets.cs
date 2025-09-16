#pragma warning disable CS1591

namespace Dev.DevKitV4.Shared.Entities2
{
	
	
	/// <summary>
	/// Drop-down list for selecting the category of the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_AccountCategoryCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PreferredCustomer = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Standard = 2,
	}
	
	/// <summary>
	/// Drop-down list for classifying an account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_AccountClassificationCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Drop-down list for selecting account ratings.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_AccountRatingCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Type of address for address 1, such as billing, shipping, or primary address.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address1_AddressTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BillTo = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Primary = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ShipTo = 2,
	}
	
	/// <summary>
	/// Freight terms for address 1.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address1_FreightTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fob = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NoCharge = 2,
	}
	
	/// <summary>
	/// Method of shipment for address 1.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address1_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Airborne = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dhl = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FedEx = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FullLoad = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PostalMail = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ups = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WillCall = 7,
	}
	
	/// <summary>
	/// Type of address for address 2, such as billing, shipping, or primary address.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address2_AddressTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Freight terms for address 2.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address2_FreightTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Method of shipment for address 2.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_Address2_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Type of business associated with the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_BusinessTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Size of the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_CustomerSizeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Type of the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_CustomerTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Competitor = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Consultant = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Customer = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Influencer = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Investor = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Partner = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Press = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Prospect = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Reseller = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Supplier = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Vendor = 11,
	}
	
	/// <summary>
	/// Type of industry with which the account is associated.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_IndustryCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Accounting = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AgricultureAndNonPetrolNaturalResourceExtraction = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BroadcastingPrintingAndPublishing = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Brokers = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BuildingSupplyRetail = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BusinessServices = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Consulting = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ConsumerServices = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DesignDirectionAndCreativeManagement = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DistributorsDispatchersAndProcessors = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DoctorsOfficesAndClinics = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DurableManufacturing = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EatingAndDrinkingPlaces = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntertainmentRetail = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EquipmentRentalAndLeasing = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Financial = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FoodAndTobaccoProcessing = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InboundCapitalIntensiveProcessing = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InboundRepairAndServices = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Insurance = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LegalServices = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NonDurableMerchandiseRetail = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OutboundConsumerService = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PetrochemicalExtractionAndDistribution = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ServiceRetail = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SigAffiliations = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SocialServices = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SpecialOutboundTradeContractors = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SpecialtyRealty = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Transportation = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UtilityCreationAndDistribution = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		VehicleRetail = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Wholesale = 33,
	}
	
	/// <summary>
	/// Type of company ownership, such as public or private.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_OwnershipCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Private = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Public = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Subsidiary = 3,
	}
	
	/// <summary>
	/// Payment terms for the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_PaymentTermsCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_210Net30 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Net30 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Net45 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Net60 = 4,
	}
	
	/// <summary>
	/// Day of the week that the account prefers for scheduling service activities.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_PreferredAppointmentDayCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Friday = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Monday = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Saturday = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sunday = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Thursday = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tuesday = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Wednesday = 3,
	}
	
	/// <summary>
	/// Time of day that the account prefers for scheduling service activities.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_PreferredAppointmentTimeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Afternoon = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Evening = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Morning = 1,
	}
	
	/// <summary>
	/// Preferred contact method for the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_PreferredContactMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Any = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Email = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fax = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Mail = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Phone = 3,
	}
	
	/// <summary>
	/// Method of shipment for the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_ShippingMethodCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Status of the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_StateCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inactive = 1,
	}
	
	/// <summary>
	/// Reason for the status of the account.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_StatusCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inactive = 2,
	}
	
	/// <summary>
	/// Territory to which the account belongs.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Account_TerritoryCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DefaultValue = 1,
	}
	
	/// <summary>
	/// Type of entity with which the activity attachment is associated.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ActivityFileAttachment_ObjectCode
	{
		
		/// <summary>
		/// Post
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Post = 8000,
		
		/// <summary>
		/// Post Comment
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PostComment = 8005,
	}
	
	/// <summary>
	/// Type of activity.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ActivityPointer_ActivityTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Appointment = 4201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceAlert = 10611,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceSurveyInvite = 10612,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceSurveyResponse = 10613,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Email = 4202,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fax = 4204,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InviteRedemption = 10315,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Letter = 4207,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PhoneCall = 4210,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortalComment = 10316,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RecurringAppointment = 4251,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Task = 4212,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TeamsChat = 10187,
	}
	
	/// <summary>
	/// Priority of delivery of the activity to the email server.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ActivityPointer_DeliveryPriorityCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		High = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Low = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Normal = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum AIOperationOverrideType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Delete = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Upsert = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum AIPluginSubtype
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CertifiedConnector = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Conversational = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomApi = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomConnector = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dataverse = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Flow = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Prompt = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Qa = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RestApi = 7,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum AIPluginType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connector = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Customconnector = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dataverse = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Flow = 3,
	}
	
	/// <summary>
	/// Application Access.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ApplicationAccess
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Allowed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Blocked = 1,
	}
	
	/// <summary>
	/// Cloud name for which Application Based Access List is provided. 0 is Prod, 1 is PPE , 2 is Mooncake, 3 is Arington
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ApplicationBasedAccessList_Cloud
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Arlington = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Gallatin = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ppe = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Prod = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum BotComponentCollectionSharingRoleType
	{
		
		/// <summary>
		/// Can author the component collection
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ComponentCollectionAuthor = 3,
		
		/// <summary>
		/// Has access to the content of the component collection and can add component collection to the copilot
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ComponentCollectionUser = 2,
		
		/// <summary>
		/// Copilot user has access to the content of the component collection
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CopilotUser = 1,
	}
	
	/// <summary>
	/// Type of Reuse Policy associated with Copilot Studio copilot components.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum BotComponentReusePolicy
	{
		
		/// <summary>
		/// Not Reusable. By default, a copilot component is not reusable and Reuse Policy is None
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		/// <summary>
		/// Is required by one or more Public copilot component, but is not directly invokable or visible
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Private = 1,
		
		/// <summary>
		/// Visible shared / reusable copilot component for use in all bots in the environment
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Public = 2,
	}
	
	/// <summary>
	/// Type of sharing roles associated with Power Virtual Agents bots.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum BotSharingRoleTypes
	{
		
		/// <summary>
		/// Creates, edit and maintains bot content (trigger phrases, topic content, entities and variables). USes Power Automate solutions, authentication action and other extensibility integrations (e.g. skill) provided by developers in content editing.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CopilotAuthor = 2,
		
		/// <summary>
		/// A manager has full access to all bot content, can publish content, is accountable for bot operations, and can configure hand-off, channels and other operational information.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CopilotManager = 1,
		
		/// <summary>
		/// View bot performance in analytics section, monitors CSAT, provides feedback and suggestions.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CopilotReviewer = 3,
	}
	
	/// <summary>
	/// Select the records to send the direct email to
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum BulkEmail_Recipient
	{
		
		/// <summary>
		/// Send direct email to all the records on all the pages in the current view.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecordsOnAllPages = 3,
		
		/// <summary>
		/// Send direct email to all the records on this page.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecordsOnCurrentPage = 2,
		
		/// <summary>
		/// Send direct email only to the records you selected on this page.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SelectedRecordsOnCurrentPage = 1,
	}
	
	/// <summary>
	/// Select the records to send the direct email to
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum BulkEmail_Recipients
	{
		
		/// <summary>
		/// Send direct email to all the records on all the pages in the current view.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecordsOnAllPages = 3,
		
		/// <summary>
		/// Send direct email to all the records on this page.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecordsOnCurrentPage = 2,
		
		/// <summary>
		/// Send direct email only to the records you selected on this page.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SelectedRecordsOnCurrentPage = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Capability
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Actions = 118690005,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Blob = 118690002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Cloud = 118690004,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Composite = 118690000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Gateway = 118690003,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tabular = 118690001,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ChatBotLanguage
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Arabic = 1025,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ChineseSimplified = 2052,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ChineseTraditional = 1028,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Czech = 1029,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Danish = 1030,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dutch = 1043,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		English = 1033,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnglishAustralia = 3081,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnglishUnitedKingdom = 2057,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Finnish = 1035,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		French = 1036,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FrenchCanada = 3084,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		German = 1031,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Greek = 1032,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hebrew = 1037,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hindi = 1081,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Indonesian = 1057,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Italian = 1040,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Japanese = 1041,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Korean = 1042,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Norwegian = 1044,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Polish = 1045,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortugueseBrazilian = 1046,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortuguesePortugal = 2070,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Russian = 1049,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Spanish = 1034,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SpanishUnitedStates = 21514,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Swedish = 1053,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Thai = 1054,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Turkish = 1055,
	}
	
	/// <summary>
	/// The state of this component.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ComponentState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleted = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeletedUnpublished = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Published = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unpublished = 1,
	}
	
	/// <summary>
	/// All of the possible component types for solutions.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ComponentType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AiConfiguration = 402,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AiProject = 401,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AiProjectType = 400,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Attachment = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Attribute = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AttributeImageConfiguration = 431,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AttributeLookupValue = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AttributeMap = 47,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AttributePicklistValue = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CanvasApp = 300,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ComplexControl = 64,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ConnectionRole = 63,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connector_371 = 371,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connector_372 = 372,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ContractTemplate = 37,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ConvertRule = 154,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ConvertRuleItem = 155,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomControl = 66,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomControlDefaultConfig = 68,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DataSourceMapping = 166,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisplayString = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisplayStringMap = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DuplicateRule = 44,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DuplicateRuleCondition = 45,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EmailTemplate = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entity = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityAnalyticsConfiguration = 430,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityImageConfiguration = 432,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityKey = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityMap = 46,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityRelationship = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityRelationshipRelationships = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EntityRelationshipRole = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnvironmentVariableDefinition = 380,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnvironmentVariableValue = 381,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FieldPermission = 71,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FieldSecurityProfile = 70,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Form = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HierarchyRule = 65,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ImportMap = 208,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Index = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KbArticleTemplate = 38,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LocalizedLabel = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MailMergeTemplate = 39,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ManagedProperty = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MobileOfflineProfile = 161,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MobileOfflineProfileItem = 162,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OptionSet = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Organization = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PluginAssembly = 91,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PluginType = 90,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Privilege = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Privilegeobjecttypecode = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Relationship = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RelationshipExtraCondition = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Report = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReportCategory = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReportEntity = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReportVisibility = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonCommand = 48,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonContextGroup = 49,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonCustomization = 50,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonDiff = 55,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonRule = 52,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RibbonTabToCommandMap = 53,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Role = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RolePrivilege = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RoutingRule = 150,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RoutingRuleItem = 151,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SavedQuery = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SavedQueryVisualization = 59,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessage = 201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessagefilter = 202,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessagepair = 203,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SdkMessageProcessingStep = 92,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SdkMessageProcessingStepImage = 93,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessagerequest = 204,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessagerequestfield = 205,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessageresponse = 206,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sdkmessageresponsefield = 207,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ServiceEndpoint = 95,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SimilarityRule = 165,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SiteMap = 62,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sla = 152,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SlaItem = 153,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SystemForm = 60,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ViewAttribute = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebResource = 61,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Webwizard = 210,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Workflow = 29,
	}
	
	/// <summary>
	/// Categories for connection roles.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ConnectionRole_Category
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Business = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Family = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sales = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SalesTeam = 1001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Service = 1002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Social = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Stakeholder = 1000,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ConnectorType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connectionless = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Customconnector = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notspecified = 0,
	}
	
	/// <summary>
	/// Type of channel activities.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum ConvertRule_ChannelActivity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Appointment = 4201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceAlert = 10611,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceSurveyInvite = 10612,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CustomerVoiceSurveyResponse = 10613,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Email = 4202,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InviteRedemption = 10315,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PhoneCall = 4210,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortalComment = 10316,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SocialActivity = 4216,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Task = 4212,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TeamsChat = 10187,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum CopilotExampleQuestionTKnowledgeType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ExampleKnowledge = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ExampleQuestion = 0,
	}
	
	/// <summary>
	/// Custom API Field Types
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum CustomApiFieldType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Boolean = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Datetime = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Decimal = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entity = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entitycollection = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entityreference = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Float = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Guid = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Integer = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Money = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Picklist = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		String = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Stringarray = 11,
	}
	
	/// <summary>
	/// How would you like to delete this series?
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Delete_RecurringAppointmentMaster
	{
		
		/// <summary>
		/// Delete all instances
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllInstances = 1,
		
		/// <summary>
		/// Delete all series except the past appointments
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TheSeriesLeavePastAppointments = 2,
	}
	
	/// <summary>
	/// The kind of dependency.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum DependencyType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Published = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SolutionInternal = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unpublished = 4,
	}
	
	/// <summary>
	/// Authentication protocol used when connecting to the email server.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum EmailServerProfile_AuthenticationProtocol
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AutoDetect = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basic = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Negotiate = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Ntlm = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Oauth = 4,
	}
	
	/// <summary>
	/// Field permission to read unmasked values.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Field_Security_Permission_ReadUnmasked
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecords = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotAllowed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneRecord = 1,
	}
	
	/// <summary>
	/// A Yes or No boolean.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Field_Security_Permission_Type
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Allowed = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotAllowed = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum FlipSwitch_Options
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Off = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		On = 1,
	}
	
	/// <summary>
	/// Full Sync Status for Data Sync Framework
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum FullSyncState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Acceptmerge = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Initiating = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inprogress = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Invalid = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notinitialized = 0,
	}
	
	/// <summary>
	/// Fiscal Period of Goal
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Goal_FiscalPeriod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Annual = 301,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		April = 104,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		August = 108,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		December = 112,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		February = 102,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		January = 101,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		July = 107,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		June = 106,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		March = 103,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		May = 105,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		November = 111,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		October = 110,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P1 = 401,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P10 = 410,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P11 = 411,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P12 = 412,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P13 = 413,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P2 = 402,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P3 = 403,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P4 = 404,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P5 = 405,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P6 = 406,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P7 = 407,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P8 = 408,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		P9 = 409,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Quarter1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Quarter2 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Quarter3 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Quarter4 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Semester1 = 201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Semester2 = 202,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		September = 109,
	}
	
	/// <summary>
	/// Fiscal Year of Goal
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Goal_FiscalYear
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1970 = 1970,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1971 = 1971,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1972 = 1972,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1973 = 1973,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1974 = 1974,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1975 = 1975,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1976 = 1976,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1977 = 1977,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1978 = 1978,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1979 = 1979,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1980 = 1980,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1981 = 1981,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1982 = 1982,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1983 = 1983,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1984 = 1984,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1985 = 1985,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1986 = 1986,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1987 = 1987,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1988 = 1988,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1989 = 1989,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1990 = 1990,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1991 = 1991,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1992 = 1992,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1993 = 1993,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1994 = 1994,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1995 = 1995,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1996 = 1996,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1997 = 1997,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1998 = 1998,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy1999 = 1999,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2000 = 2000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2001 = 2001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2002 = 2002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2003 = 2003,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2004 = 2004,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2005 = 2005,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2006 = 2006,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2007 = 2007,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2008 = 2008,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2009 = 2009,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2010 = 2010,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2011 = 2011,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2012 = 2012,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2013 = 2013,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2014 = 2014,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2015 = 2015,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2016 = 2016,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2017 = 2017,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2018 = 2018,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2019 = 2019,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2020 = 2020,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2021 = 2021,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2022 = 2022,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2023 = 2023,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2024 = 2024,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2025 = 2025,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2026 = 2026,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2027 = 2027,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2028 = 2028,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2029 = 2029,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2030 = 2030,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2031 = 2031,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2032 = 2032,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2033 = 2033,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2034 = 2034,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2035 = 2035,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2036 = 2036,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2037 = 2037,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fy2038 = 2038,
	}
	
	/// <summary>
	/// The role is inherited
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum IsInherited
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DirectUserBasicAccessLevelAndTeamPrivileges = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TeamPrivilegesOnly = 0,
	}
	
	/// <summary>
	/// Expiration State
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum KnowledgeArticle_ExpirationState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Archived = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Expired = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Published = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MainFewShotEntityType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Custom = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Oob = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MakerFewShotSqlCorrectness
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Invalid = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notsure = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PendingValidation = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Valid = 1,
	}
	
	/// <summary>
	/// Data type of the amount.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Metric_GoalType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Decimal = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Integer = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Money = 0,
	}
	
	/// <summary>
	/// List of Mobile Offline Enabled Entities.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MobileOfflineEnabledEntities
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Account = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ActivityFileAttachment = 10186,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Appointment = 4201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Attachment = 1001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BanGhiCongViecThuHoachKienThuc = 10683,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BpfAccount = 10632,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Contact = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Email = 4202,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ieuKienangOGiaioanPheDuyet = 10657,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ImageDescriptor = 1007,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KnowledgeArticleAttachment = 10201,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KnowledgeArticleImage = 10195,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KnowledgeFaq = 10677,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MsdynHistoricalcaseharvestbatch = 10681,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MsdynHistoricalcaseharvestrun = 10682,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Note = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Organizationdatasyncfnostate = 10223,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Organizationdatasyncstate = 10224,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Powerpagesddosalert = 10675,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Queue = 2020,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		QueueItem = 2029,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity021960299F = 10688,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity0Dbc565d14 = 10706,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity26E48da065 = 10708,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity2D0f0ccc2f = 10705,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity37F5988462 = 10697,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity395B01ac1b = 10687,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity3C35a316e9 = 10700,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity43Ee273006 = 10709,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity5Eedb74a1b = 10686,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity6152D082a7 = 10692,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity7A22c9a39a = 10696,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity7A49e05ed5 = 10695,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity7D3ed11523 = 10707,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntity7F27050f87 = 10684,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityA4b7807bb4 = 10701,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityAc60e9154a = 10699,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityBcf3fe135d = 10698,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityC86a32e382 = 10693,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityCf06f4a759 = 10694,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ReserveEntityE0cd15bf7b = 10685,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SlaKpiInstance = 9752,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Task = 4212,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Team = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ThuTuGiaioanPheDuyet = 10658,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		User = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		YeuCauPheDuyetangOGiaioanPheDuyet = 10656,
	}
	
	/// <summary>
	/// AI Model Task Type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_AIModelTaskType
	{
		
		/// <summary>
		/// Classification
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Classification = 100000002,
		
		/// <summary>
		/// None
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 100000000,
		
		/// <summary>
		/// QueryBoosting
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Queryboosting = 100000001,
	}
	
	/// <summary>
	/// The state of the dataflow template
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_DataflowTemplateState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 100000001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deprecated = 100000003,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Draft = 100000000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Published = 100000002,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_Flow_Approval_Priority
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Important = 192350001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Low = 192350003,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Medium = 192350002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Urgent = 192350000,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_Flow_Approval_RequestType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basic = 192350001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Esign = 192350002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 192350000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Templates = 192350003,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_Flow_ApprovalResponseOptionsType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basicapprovereject = 192350001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Customoptions = 192350002,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notspecified = 192350000,
	}
	
	/// <summary>
	/// The stage of an approval and a linked approval request.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_Flow_ApprovalStage
	{
		
		/// <summary>
		/// Basic stage (the single stage for Basic approvals).
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Basic = 192350001,
		
		/// <summary>
		/// The approval is complete.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Complete = 192351000,
		
		/// <summary>
		/// Not specified.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotSpecified = 192350000,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Msdyn_NumberOfSearchResults
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_15 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_20 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_25 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_30 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_40 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_50 = 6,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MsDynCe_ContentState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Draft = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Released = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MsFt_DataState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Retain = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum MsPp_ColumnPermissionValues
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Create = 746610000,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Read = 746610001,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Update = 746610002,
	}
	
	/// <summary>
	/// Option set for selecting the type of the office document.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OfficeDocument_DocumentType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MicrosoftExcel = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MicrosoftWord = 2,
	}
	
	/// <summary>
	/// Shows the different options for online meetings.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OnlineMeetingType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TeamsMeeting = 1,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OpenAIsChemAversion
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 0,
	}
	
	/// <summary>
	/// Types of reports.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OptionSet_RunReport
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllApplicableRecords = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AllRecordsOnAllPagesInCurrentView = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TheSelectedRecords = 0,
	}
	
	/// <summary>
	/// Application Based Access Control Mode. 0 is Disabled, 1 is Enabled, 2 is audit mode, 3 is Enabled for roles
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Organization_ApplicationBasedAccessControlMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Auditmode = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disabled = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnabledForRoles = 3,
	}
	
	/// <summary>
	/// Samesite mode for Session Cookie: 0 is Default, 1 is None, 2 is Lax , 3 is Strict
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Organization_SameSiteModeForSessionCookie
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Lax = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Strict = 3,
	}
	
	/// <summary>
	/// Lookback referenced by configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OrgInsightsConfiguration_LookBack
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2H = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_30D = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_48H = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_7D = 3,
	}
	
	/// <summary>
	/// Plot Option referenced by configuration.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum OrgInsightsConfiguration_PlotOption
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Area = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bar = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bubble = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Column = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Donut = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Doubledonut = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Infocard = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Line = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Lineargauge = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		List = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Pie = 4,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Photo_Resolution
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1024X768 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1600X1200 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2048X1536 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2592X1936 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_640X480 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeviceDefault = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PowerBiMashupParameterValueSource
	{
		
		/// <summary>
		/// The value for the parameter is set to the domain of the current environment
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnvironmentDomain = 200000002,
		
		/// <summary>
		/// The value for the parameter is bound to an environment variable
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EnvironmentVariable = 200000001,
		
		/// <summary>
		/// The value for the parameter is provided as text
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Literal = 200000000,
	}
	
	/// <summary>
	/// Power Pages Component Type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PowerPageComponentType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AdPlacement = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AdvancedForm = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AdvancedFormMetadata = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AdvancedFormStep = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BasicForm = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BasicFormMetadata = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BotConsumer = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CloudFlow = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ColumnPermission = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ColumnPermissionProfile = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ContentSnippet = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		List = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PageTemplate = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PollPlacement = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PublishingState = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PublishingStateTransitionRule = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Redirect = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ServerLogic = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Shortcut = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SiteMarker = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SiteSetting = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TablePermission = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UxComponent = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebFile = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebLink = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebLinkSet = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebPage = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebPageAccessControlRule = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebRole = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebsiteAccess = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebTemplate = 8,
	}
	
	/// <summary>
	/// Power Pages Languages
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PowerPageLanguages
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Arabic = 1025,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BasqueBasque = 1069,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BulgarianBulgaria = 1026,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CatalanCatalan = 1027,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ChineseChina = 2052,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ChineseHongKongSar = 3076,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ChineseTraditional = 1028,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CroatianCroatia = 1050,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CzechCzechRepublic = 1029,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DanishDenmark = 1030,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DutchNetherlands = 1043,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		English = 1033,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EstonianEstonia = 1061,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FinnishFinland = 1035,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FrenchFrance = 1036,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GalicianSpain = 1110,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GermanGermany = 1031,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GreekGreece = 1032,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hebrew = 1037,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HindiIndia = 1081,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HungarianHungary = 1038,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		IndonesianIndonesia = 1057,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ItalianItaly = 1040,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JapaneseJapan = 1041,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KazakhKazakhstan = 1087,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KoreanKorea = 1042,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LatvianLatvia = 1062,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LithuanianLithuania = 1063,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MalayMalaysia = 1086,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NorwegianBokmalNorway = 1044,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PolishPoland = 1045,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortugueseBrazil = 1046,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PortuguesePortugal = 2070,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RomanianRomania = 1048,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RussianRussia = 1049,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SerbianCyrillicSerbia = 3098,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SerbianLatinSerbia = 2074,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SlovakSlovakia = 1051,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SlovenianSlovenia = 1060,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SpanishTraditionalSortSpain = 3082,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SwedishSweden = 1053,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ThaiThailand = 1054,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TurkishTurkiye = 1055,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UkrainianUkraine = 1058,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		VietnameseVietnam = 1066,
	}
	
	/// <summary>
	/// Power Pages Site Type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PowerPageSiteType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CodeSite = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 0,
	}
	
	/// <summary>
	/// Power Pages Source File Type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PowerPagesSourceFileType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Css = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Html = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JavaScript = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Json = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tsx = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WebTemplate = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Xml = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Yml = 7,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum PrincipalSyncAttributeMapping_SyncDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bidirectional = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tocrm = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Toexchange = 1,
	}
	
	/// <summary>
	/// Category of the process stage.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Processstage_Category
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Approval = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Close = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Develop = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Identify = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Propose = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Qualify = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Research = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Resolve = 6,
	}
	
	/// <summary>
	/// Choose when the appointment should end
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RangeEnds_Options
	{
		
		/// <summary>
		/// The appointment series ends by a specied end date
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ByEndDate = 3,
		
		/// <summary>
		/// The appointment series ends after a specified number of occurences
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ByNumberOfOccurrences = 2,
		
		/// <summary>
		/// The appointment series never ends
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Never = 1,
	}
	
	/// <summary>
	/// Specifies the month of the year valid for the recurrence pattern.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RecurrenceRule_MonthOfYear
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		April = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		August = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		December = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		February = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidMonthOfYear = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		January = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		July = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		June = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		March = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		May = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		November = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		October = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		September = 9,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RegistrationStatusType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inprogress = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notregistered = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Registered = 1,
	}
	
	/// <summary>
	/// Options for how often should an appointment repeat?
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RepeatPattern_Options
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Daily = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Monthly = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Weekly = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Yearly = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RestApiAuthType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Apikey = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entrasso = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Oauth2 = 0,
	}
	
	/// <summary>
	/// Type of connection to use with RunDesktopFlow action.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum RunDesktopFlowConnectionType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Connection = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ConnectionReference = 2,
	}
	
	/// <summary>
	/// Day of the week used under Monthly/Yearly recurrence patterns
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SameWeekday_Options
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Day = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Friday = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Monday = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Saturday = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sunday = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Thursday = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tuesday = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Wednesday = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Weekday = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WeekendDay = 2,
	}
	
	/// <summary>
	/// Week of the month used under Monthly/Yearly recurrence patterns
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SameWeekWeek_Options
	{
		
		/// <summary>
		/// First week of the month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		First = 1,
		
		/// <summary>
		/// Fourth week of the month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fourth = 4,
		
		/// <summary>
		/// Last week of the month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Last = 5,
		
		/// <summary>
		/// Second week of the month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Second = 2,
		
		/// <summary>
		/// Third week of the month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Third = 3,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SearchEntity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entity1 = 200004747,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Entity2 = 200004748,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Referencedentity = 200004749,
	}
	
	/// <summary>
	/// Value indicating whether security role is auto-assigned based on user license
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SecurityRole_IsAutoAssigned
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		No = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Yes = 1,
	}
	
	/// <summary>
	/// Validation status of the record URL.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SharePoint_ValidationStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CouldNotValidate = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InProgress = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Invalid = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotValidated = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Valid = 4,
	}
	
	/// <summary>
	/// Validation status reason of the record URL.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SharePoint_ValidationStatusReason
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AuthenticationFailure = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InvalidCertificates = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TheUrlCouldNotBeAccessedBecauseOfInternetExplorerSecuritySettings = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TheUrlSchemesOfMicrosoftDynamics365AndSharepointAreDifferent = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ThisRecordsUrlHasNotBeenValidated = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ThisRecordsUrlIsNotValid = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ThisRecordsUrlIsValid = 2,
	}
	
	/// <summary>
	/// Location type of the SharePoint document location.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SharePointDocumentLocation_LocationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DedicatedForOnenoteIntegration = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		General = 0,
	}
	
	/// <summary>
	/// Shows the service type of the SharePoint site
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SharePointSite_ServiceType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MsTeams = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Onedrive = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SharedWithMe = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sharepoint = 0,
	}
	
	/// <summary>
	/// Post message type private or direct.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SocialActivity_PostMessageType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PrivateMessage = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PublicMessage = 0,
	}
	
	/// <summary>
	/// Identifies where the social profile originated from, such as Twitter, or FaceBook.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SocialProfile_Community
	{
		
		/// <summary>
		/// Facebook item.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Facebook = 1,
		
		/// <summary>
		/// Other default
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Other = 0,
		
		/// <summary>
		/// Twitter.
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Twitter = 2,
	}
	
	/// <summary>
	/// Synapse Link destination sync state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkDestinationSyncState
	{
		
		/// <summary>
		/// Completed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 2,
		
		/// <summary>
		/// None
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		/// <summary>
		/// Not Completed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notcompleted = 1,
	}
	
	/// <summary>
	/// Synapse Link entity metadata state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkEntityMetadataState
	{
		
		/// <summary>
		/// Created
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Created = 8,
		
		/// <summary>
		/// Failure
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failure = 16,
		
		/// <summary>
		/// Metadata creating
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Metadatacreating = 2,
		
		/// <summary>
		/// None state for flag enumeration. Not a valid state for usage
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		/// <summary>
		/// Not created
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notcreated = 1,
		
		/// <summary>
		/// Relationship creating
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Relationshipcreating = 4,
	}
	
	/// <summary>
	/// Synapse Link entity partition strategy
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkEntityPartitionStrategy
	{
		
		/// <summary>
		/// FiveDay
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fiveday = 3,
		
		/// <summary>
		/// HalfMonth
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Halfmonth = 2,
		
		/// <summary>
		/// Month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Month = 1,
		
		/// <summary>
		/// Year
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Year = 0,
	}
	
	/// <summary>
	/// Synapse Link Entity Source
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkEntitySource
	{
		
		/// <summary>
		/// Dataverse
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dataverse = 0,
		
		/// <summary>
		/// FnOTables
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Fnotables = 1,
	}
	
	/// <summary>
	/// Synapse Link entity sync state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkEntitySyncState
	{
		
		/// <summary>
		/// Completed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 4,
		
		/// <summary>
		/// Completed with failures
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completedwithfailures = 8,
		
		/// <summary>
		/// In progress
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inprogress = 2,
		
		/// <summary>
		/// None
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		/// <summary>
		/// Not started
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notstarted = 1,
		
		/// <summary>
		/// Paused
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Paused = 32,
		
		/// <summary>
		/// Post processing
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Postprocessing = 64,
		
		/// <summary>
		/// Requested initial data
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Requestedinitialdata = 16,
	}
	
	/// <summary>
	/// Synapse Link external table state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkExternalTableState
	{
		
		/// <summary>
		/// Created
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Created = 1,
		
		/// <summary>
		/// Deleted
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleted = 3,
		
		/// <summary>
		/// Failed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 2,
		
		/// <summary>
		/// In Progress
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		InProgress = 4,
		
		/// <summary>
		/// Not created
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotCreated = 0,
	}
	
	/// <summary>
	/// Synapse Link Profile entity type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkProfileEntityType
	{
		
		/// <summary>
		/// Requested
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Requested = 0,
	}
	
	/// <summary>
	/// Synapse Link profile state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkProfileState
	{
		
		/// <summary>
		/// Aborted
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Aborted = 5,
		
		/// <summary>
		/// Aborting
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Aborting = 4,
		
		/// <summary>
		/// Active
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Active = 1,
		
		/// <summary>
		/// Deactivated
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deactivated = 8,
		
		/// <summary>
		/// Deleted
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleted = 3,
		
		/// <summary>
		/// Error
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Error = 2,
		
		/// <summary>
		/// Inactive
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inactive = 0,
		
		/// <summary>
		/// Suspended
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Suspended = 6,
		
		/// <summary>
		/// Suspending
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Suspending = 7,
	}
	
	/// <summary>
	/// Synapse Link profile type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkProfileType
	{
		
		/// <summary>
		/// Event Analytics profile
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Eventanalytics = 1,
		
		/// <summary>
		/// Synapse Link profile
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Synapselink = 0,
	}
	
	/// <summary>
	/// Synapse Link schedule recurrence unit
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkScheduleRecurrenceUnit
	{
		
		/// <summary>
		/// Day
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Day = 3,
		
		/// <summary>
		/// Hour
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hour = 2,
		
		/// <summary>
		/// Minute
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minute = 1,
		
		/// <summary>
		/// Month
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Month = 5,
		
		/// <summary>
		/// None
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		/// <summary>
		/// Week
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Week = 4,
		
		/// <summary>
		/// Year
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Year = 6,
	}
	
	/// <summary>
	/// Synapse Link schedule type
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkScheduleType
	{
		
		/// <summary>
		/// Incremental update
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Incrementalupdate = 1,
		
		/// <summary>
		/// Snapshot
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Snapshot = 0,
	}
	
	/// <summary>
	/// Synapse Link table creation state
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SynapseLinkSynapseTableCreationState
	{
		
		/// <summary>
		/// Completed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 2,
		
		/// <summary>
		/// Failed
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 3,
		
		/// <summary>
		/// In progress
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Inprogress = 1,
		
		/// <summary>
		/// Not started
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Notstarted = 0,
	}
	
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SyncAttributeMapping_SyncDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bidirectional = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tocrm = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Toexchange = 1,
	}
	
	/// <summary>
	/// Shows the sync status.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum SyncStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NotEnabled = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Pending = 1,
	}
	
	/// <summary>
	/// Specifies the system user account under which a workflow executes
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Workflow_RunAs
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CallingUser = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Owner = 0,
	}
	
	/// <summary>
	/// Stage in which the Workflow executes
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum Workflow_Stage
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PostOperation = 40,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PreOperation = 20,
	}
	
	/// <summary>
	/// Type of entity with which the workflow log is associated.
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum WorkflowLog_ObjectTypeCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FlowSession = 4720,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SystemJob = 4700,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WorkflowSession = 4710,
	}
	
	/// <summary>
	/// Months in a year used under Yearly recurrence pattern
	/// </summary>
	[System.Runtime.Serialization.DataContractAttribute()]
	public enum YearlyMonth_Options
	{
		
		/// <summary>
		/// April
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		April = 4,
		
		/// <summary>
		/// August
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		August = 8,
		
		/// <summary>
		/// December
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		December = 12,
		
		/// <summary>
		/// February
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		February = 2,
		
		/// <summary>
		/// January
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		January = 1,
		
		/// <summary>
		/// July
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		July = 7,
		
		/// <summary>
		/// June
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		June = 6,
		
		/// <summary>
		/// March
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		March = 3,
		
		/// <summary>
		/// May
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		May = 5,
		
		/// <summary>
		/// November
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		November = 11,
		
		/// <summary>
		/// October
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		October = 10,
		
		/// <summary>
		/// September
		/// </summary>
		[System.Runtime.Serialization.EnumMemberAttribute()]
		September = 9,
	}
}
#pragma warning restore CS1591
