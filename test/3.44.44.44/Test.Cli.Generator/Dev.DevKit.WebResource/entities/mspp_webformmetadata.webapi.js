'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.mspp_webformmetadataApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _mspp_webformmetadata = {
			mspp_adddescription: { a: 'mspp_adddescription' },
			mspp_attributelogicalname: { a: 'mspp_attributelogicalname' },
			mspp_constantsummaximumtotal: { a: 'mspp_constantsummaximumtotal' },
			mspp_constantsumminimumtotal: { a: 'mspp_constantsumminimumtotal' },
			mspp_constantsumvalidationerrormessage: { a: 'mspp_constantsumvalidationerrormessage' },
			mspp_controlstyle: { a: 'mspp_controlstyle' },
			mspp_createdby: { b: 'mspp_createdby', a: '_mspp_createdby_value', c: 'systemusers', d: 'systemuser' },
			mspp_createdon_UtcDateAndTime: { a: 'mspp_createdon' },
			mspp_cssclass: { a: 'mspp_cssclass' },
			mspp_description: { a: 'mspp_description' },
			mspp_descriptionposition: { a: 'mspp_descriptionposition' },
			mspp_entityformforcreate: { b: 'mspp_entityformforcreate', a: '_mspp_entityformforcreate_value', c: 'mspp_webforms', d: 'mspp_webform' },
			mspp_entityformforcreateinwebformmetadata: { b: 'mspp_entityformforcreateinwebformmetadata', a: '_mspp_entityformforcreateinwebformmetadata_value', c: 'mspp_entityforms', d: 'mspp_entityform' },
			mspp_fieldisrequired: { a: 'mspp_fieldisrequired' },
			mspp_geolocationvalidatorerrormessage: { a: 'mspp_geolocationvalidatorerrormessage' },
			mspp_groupname: { a: 'mspp_groupname' },
			mspp_ignoredefaultvalue: { a: 'mspp_ignoredefaultvalue' },
			mspp_label: { a: 'mspp_label' },
			mspp_maxmultiplechoiceselectedcount: { a: 'mspp_maxmultiplechoiceselectedcount' },
			mspp_minmultiplechoiceselectedcount: { a: 'mspp_minmultiplechoiceselectedcount' },
			mspp_modifiedby: { b: 'mspp_modifiedby', a: '_mspp_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			mspp_modifiedon_UtcDateAndTime: { a: 'mspp_modifiedon' },
			mspp_multiplechoicevalidationerrormessage: { a: 'mspp_multiplechoicevalidationerrormessage' },
			mspp_notes_settings: { a: 'mspp_notes_settings' },
			mspp_onsavefromattribute: { a: 'mspp_onsavefromattribute' },
			mspp_onsavetype: { a: 'mspp_onsavetype' },
			mspp_onsavevalue: { a: 'mspp_onsavevalue' },
			mspp_prepopulatefromattribute: { a: 'mspp_prepopulatefromattribute' },
			mspp_prepopulatetype: { a: 'mspp_prepopulatetype' },
			mspp_prepopulatevalue: { a: 'mspp_prepopulatevalue' },
			mspp_provisionedlanguages: { a: 'mspp_provisionedlanguages' },
			mspp_purchasecreateinvoiceonpayment: { a: 'mspp_purchasecreateinvoiceonpayment' },
			mspp_purchasefulfillorderonpayment: { a: 'mspp_purchasefulfillorderonpayment' },
			mspp_purchaselineitemdescriptionattribute: { a: 'mspp_purchaselineitemdescriptionattribute' },
			mspp_purchaselineiteminstructionsattribute: { a: 'mspp_purchaselineiteminstructionsattribute' },
			mspp_purchaselineitemorderattribute: { a: 'mspp_purchaselineitemorderattribute' },
			mspp_purchaselineitemproductattribute: { a: 'mspp_purchaselineitemproductattribute' },
			mspp_purchaselineitemquantityattribute: { a: 'mspp_purchaselineitemquantityattribute' },
			mspp_purchaselineitemrelationship: { a: 'mspp_purchaselineitemrelationship' },
			mspp_purchaselineitemrequiredattribute: { a: 'mspp_purchaselineitemrequiredattribute' },
			mspp_purchaselineitemuomattribute: { a: 'mspp_purchaselineitemuomattribute' },
			mspp_purchaseoptionalproductsrelationship: { a: 'mspp_purchaseoptionalproductsrelationship' },
			mspp_purchasequotename: { a: 'mspp_purchasequotename' },
			mspp_purchaserequiredproductsrelationship: { a: 'mspp_purchaserequiredproductsrelationship' },
			mspp_purchaserequiresshipping: { a: 'mspp_purchaserequiresshipping' },
			mspp_purchasetargetentityinvoicerelationship: { a: 'mspp_purchasetargetentityinvoicerelationship' },
			mspp_purchasetargetentityorderrelationship: { a: 'mspp_purchasetargetentityorderrelationship' },
			mspp_purchasetargetentityrelationship: { a: 'mspp_purchasetargetentityrelationship' },
			mspp_randomizeoptionsetvalues: { a: 'mspp_randomizeoptionsetvalues' },
			mspp_rangevalidationerrormessage: { a: 'mspp_rangevalidationerrormessage' },
			mspp_rankordernotiesvalidationerrormessage: { a: 'mspp_rankordernotiesvalidationerrormessage' },
			mspp_requiredfieldvalidationerrormessage: { a: 'mspp_requiredfieldvalidationerrormessage' },
			mspp_sectionname: { a: 'mspp_sectionname' },
			mspp_setvalueonsave: { a: 'mspp_setvalueonsave' },
			mspp_subgrid_name: { a: 'mspp_subgrid_name' },
			mspp_subgrid_settings: { a: 'mspp_subgrid_settings' },
			mspp_tabname: { a: 'mspp_tabname' },
			mspp_timeline_settings: { a: 'mspp_timeline_settings' },
			mspp_type: { a: 'mspp_type' },
			mspp_useattributedescriptionproperty: { a: 'mspp_useattributedescriptionproperty' },
			mspp_validationerrormessage: { a: 'mspp_validationerrormessage' },
			mspp_validationregularexpression: { a: 'mspp_validationregularexpression' },
			mspp_validationregularexpressionerrormessage: { a: 'mspp_validationregularexpressionerrormessage' },
			mspp_webformmetadataId: { a: 'mspp_webformmetadataid' },
			mspp_webformstep: { b: 'mspp_webformstep', a: '_mspp_webformstep_value', c: 'mspp_webformsteps', d: 'mspp_webformstep' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var mspp_webformmetadata = {};
		mspp_webformmetadata.ODataEntity = e;
		mspp_webformmetadata.FormattedValue = {};
		for (var field in _mspp_webformmetadata) {
			var a = _mspp_webformmetadata[field].a;
			var b = _mspp_webformmetadata[field].b;
			var c = _mspp_webformmetadata[field].c;
			var d = _mspp_webformmetadata[field].d;
			var g = _mspp_webformmetadata[field].g;
			var r = _mspp_webformmetadata[field].r;
			webApiField(mspp_webformmetadata, field, e, a, b, c, d, r, u, g);
		}
		mspp_webformmetadata.Entity = u;
		mspp_webformmetadata.EntityName = 'mspp_webformmetadata';
		mspp_webformmetadata.EntityCollectionName = 'mspp_webformmetadatas';
		mspp_webformmetadata['@odata.etag'] = e['@odata.etag'];
		mspp_webformmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		mspp_webformmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return mspp_webformmetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_webformmetadata = {
		mspp_controlstyle : {
			Code_component: 756150001,
			Group_Whole_Number_as_Constant_Sum: 100000003,
			Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties: 100000005,
			Group_Whole_Number_as_Rank_Order_Scale_No_Ties: 100000004,
			Group_Whole_Number_as_Stack_Rank: 100000008,
			Multiple_Choice: 100000007,
			Multiple_Choice_Matrix: 100000006,
			Option_Set_as_Horizontal_Radio_Button_List: 100000001,
			Option_Set_as_Vertical_Radio_Button_List: 100000000,
			Render_Lookup_as_Dropdown: 756150000,
			Single_Line_of_Text_as_Geolocation_Lookup_Validator: 100000002
		},
		mspp_descriptionposition : {
			Above_the_field: 100000000,
			Above_the_label: 100000002,
			Below_the_field: 100000001
		},
		mspp_onsavetype : {
			Current_Portal_User: 100000002,
			Todays_Date: 100000001,
			Value: 100000000
		},
		mspp_prepopulatetype : {
			Current_Portal_User: 100000002,
			Todays_Date: 100000001,
			Value: 100000000
		},
		mspp_type : {
			Attribute: 100000000,
			Notes: 100000005,
			Purchase: 100000003,
			Section: 100000001,
			Subgrid: 100000004,
			Tab: 100000002,
			Timeline: 756150000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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