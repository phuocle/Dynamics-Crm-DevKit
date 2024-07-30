'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AnnotationApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _annotation = {
			AnnotationId: { a: 'annotationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentBody: { a: 'documentbody' },
			DummyFileName: { a: 'dummyfilename', r: true },
			DummyRegarding: { a: 'dummyregarding', r: true },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSize: { a: 'filesize', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDocument: { a: 'isdocument' },
			IsPrivate: { a: 'isprivate', r: true },
			LangId: { a: 'langid' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NoteText: { a: 'notetext' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_adx_invitation: { b: 'objectid_adx_invitation', a: '_objectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			objectid_adx_inviteredemption: { b: 'objectid_adx_inviteredemption', a: '_objectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			objectid_adx_portalcomment: { b: 'objectid_adx_portalcomment', a: '_objectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			channelaccessprofile_annotations: { b: 'channelaccessprofile_annotations', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_profileruleitem: { b: 'objectid_profileruleitem', a: '_objectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			objectid_chat: { b: 'objectid_chat', a: '_objectid_value', c: 'chats', d: 'chat' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailserverprofile: { b: 'objectid_emailserverprofile', a: '_objectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_msdyn_aifptrainingdocument: { b: 'objectid_msdyn_aifptrainingdocument', a: '_objectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			objectid_msdyn_aimodel: { b: 'objectid_msdyn_aimodel', a: '_objectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			objectid_msdyn_aiodimage: { b: 'objectid_msdyn_aiodimage', a: '_objectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			objectid_msdyn_flow_approval: { b: 'objectid_msdyn_flow_approval', a: '_objectid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			objectid_mspcat_catalogsubmissionfiles: { b: 'objectid_mspcat_catalogsubmissionfiles', a: '_objectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_routingrule: { b: 'objectid_routingrule', a: '_objectid_value', c: 'routingrules', d: 'routingrule' },
			objectid_routingruleitem: { b: 'objectid_routingruleitem', a: '_objectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			objectid_sharepointdocument: { b: 'objectid_sharepointdocument', a: '_objectid_value', c: 'sharepointdocuments', d: 'sharepointdocument' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Prefix: { a: 'prefix', r: true },
			StepId: { a: 'stepid' },
			StoragePointer: { a: 'storagepointer', r: true },
			Subject: { a: 'subject' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var annotation = {};
		annotation.ODataEntity = e;
		annotation.FormattedValue = {};
		for (var field in _annotation) {
			var a = _annotation[field].a;
			var b = _annotation[field].b;
			var c = _annotation[field].c;
			var d = _annotation[field].d;
			var g = _annotation[field].g;
			var r = _annotation[field].r;
			webApiField(annotation, field, e, a, b, c, d, r, u, g);
		}
		annotation.Entity = u;
		annotation.EntityName = 'annotation';
		annotation.EntityCollectionName = 'annotations';
		annotation['@odata.etag'] = e['@odata.etag'];
		annotation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		annotation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return annotation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Annotation = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Bao_gia: 1084,
			Cam_ket: 4215,
			Chi_dinh_Nguon_luc: 4006,
			Chien_dich: 4400,
			Co_hoi: 3,
			Co_soThiet_bi: 4000,
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Danh_sach_Khach_hang_Tiep_thi: 4300,
			Dich_vu: 4001,
			Doi_thu_canh_tranh: 123,
			Don_hang: 1088,
			Dong_bao_gia: 4211,
			Dong_Co_hoi: 4208,
			Dong_don_hang: 4209,
			Email: 4202,
			Fax: 4204,
			Giai_quyet_Truong_hop: 4206,
			Hoa_don: 1090,
			Hoat_dong_Chien_dich: 4402,
			Hoat_dong_dich_vu: 4214,
			Hop_dong: 1010,
			Khach_hang_tiem_nang: 4,
			Lich: 4003,
			Mo_ta_Hop_dong: 1011,
			Muc_quy_tac_dinh_tuyen: 8199,
			Nguoi_lien_he: 2,
			Nhap_Hang_loat: 4407,
			Nhiem_vu: 4212,
			Phan_hoi_ve_Chien_dich: 4401,
			Quy_tac_Dinh_tuyen: 8181,
			San_pham: 1024,
			Tai_khoan: 1,
			Thu_tin: 4207,
			Truong_hop: 112
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));