﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.ActionCardUserSettingsOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class ActionCardUserSettings : EntityBase
	{
		public struct Fields
		{
			public const string ActionCardUserSettingsId = "actioncardusersettingsid";
			public const string BoolCardOption = "boolcardoption";
			public const string CardType = "cardtype";
			public const string CardTypeId = "cardtypeid";
			public const string IntCardOption = "intcardoption";
			public const string IsEnabled = "isenabled";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string StringCardOption = "stringcardoption";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "actioncardusersettings";

		public const int EntityTypeCode = 9973;

		[DebuggerNonUserCode()]
		public ActionCardUserSettings()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActionCardUserSettings(Guid ActionCardUserSettingsId)
		{
			Entity = new Entity(EntityLogicalName, ActionCardUserSettingsId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActionCardUserSettings(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActionCardUserSettings(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActionCardUserSettings(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ActionCardUserSettings(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier user entity</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ActionCardUserSettingsId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ActionCardUserSettingsId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Bolean option for a cardtype.</para>
		/// <para>Boolean</para>
		/// <para>Bolean option for a cardtype.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? BoolCardOption
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.BoolCardOption); }
			set { Entity.Attributes[Fields.BoolCardOption] = value; }
		}

		/// <summary>
		/// <para>The CardType ENUM value.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>CardType ENUM</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? CardType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.CardType); }
			set { Entity.Attributes[Fields.CardType] = value; }
		}

		/// <summary>
		/// <para>card type attribute</para>
		/// <para>Lookup to cardtype</para>
		/// <para>card type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CardTypeId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CardTypeId); }
			set { Entity.Attributes[Fields.CardTypeId] = value; }
		}

		/// <summary>
		/// <para>Any int option for a cardtype.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 180</para>
		/// <para>Any int option for a cardtype.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? IntCardOption
		{
			get { return Entity.GetAttributeValue<int?>(Fields.IntCardOption); }
			set { Entity.Attributes[Fields.IntCardOption] = value; }
		}

		/// <summary>
		/// <para>Select whether the card is enabled for user or not.</para>
		/// <para>Boolean</para>
		/// <para>Visibiliy Status of ActionCard</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsEnabled
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsEnabled); }
			set { Entity.Attributes[Fields.IsEnabled] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the settings.</para>
		/// <para>Owner</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit that owns this.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team who owns this saved view.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns this saved view.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Any string option for a cardtype.</para>
		/// <para>Memo - MaxLength: 8192</para>
		/// <para>Any string option for a cardtype.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string StringCardOption
		{
			get { return Entity.GetAttributeValue<string>(Fields.StringCardOption); }
			set { Entity.Attributes[Fields.StringCardOption] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}