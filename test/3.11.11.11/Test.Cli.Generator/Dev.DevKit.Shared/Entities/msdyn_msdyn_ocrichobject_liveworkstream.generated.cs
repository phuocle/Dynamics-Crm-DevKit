﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_msdyn_ocrichobject_liveworkstreamOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_msdyn_ocrichobject_liveworkstream : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_liveworkstreamid = "msdyn_liveworkstreamid";
			public const string msdyn_msdyn_ocrichobject_liveworkstreamId = "msdyn_msdyn_ocrichobject_liveworkstreamid";
			public const string msdyn_ocrichobjectid = "msdyn_ocrichobjectid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_msdyn_ocrichobject_liveworkstream";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10792;

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocrichobject_liveworkstream()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocrichobject_liveworkstream(Guid msdyn_msdyn_ocrichobject_liveworkstreamId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_msdyn_ocrichobject_liveworkstreamId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocrichobject_liveworkstream(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocrichobject_liveworkstream(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocrichobject_liveworkstream(Entity entity, Entity merge)
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
		public msdyn_msdyn_ocrichobject_liveworkstream(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_liveworkstreamid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_liveworkstreamid); }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_msdyn_ocrichobject_liveworkstreamId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? msdyn_ocrichobjectid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.msdyn_ocrichobjectid); }
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
