//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {


	}
	function testGrid(executionContext) {
		//var rowlength = form.Grid.Contacts.Rows.getLength();
		//var row0 = form.Grid.Contacts.Rows.get(0);
		//debugger;
		//var entityName = row0.EntityName;
		//form.Grid.Contacts.Rows.forEach(function (row, index) {
		//	console.log(`Row${index}`);
		//	debugger;
		//	var name = row.EntityName;
		//	var colLength = row.Columns.getLength();
		//	var col0 = row.Columns.get("fullname");
		//	row.Columns.forEach(function (column, index) {
		//		if (column.Name === "firstname") {
		//			console.log(`Col${index}`);
		//			column.Disabled = true;
		//		}
		//	});
		//	debugger;
		//});
		////form.Body.CreditLimit.SetNotification("aaa");
		//var row0 = c.Rows.get(0);
		////var data = row0.data;
		////var entity = data.entity;
		////var control0 = entity.attributes.get("emailaddress");
		////debugger;
		////entity.attributes.get("emailaddress1").controls.get("emailaddress1").setFocus();
		////entity.attributes.get("emailaddress1").controls.get("emailaddress1").setNotification("AAA", "BBB");

		//var row = devKit.LoadGridRow(row0);
		//var entityName = row.EntityName;
		//var entityReference = row.EntityReference;
		//var entityId = row.EntityId;
		//var primaryAttributeValue = row.PrimaryAttributeValue;
		//var e = row.Columns.getLength();
		//var col1 = row.Columns.get("fullname");
		//var col3 = row.Columns.get("firstname");

		//var a = col1.Value;
		//var b = col3.Value;

		//col3.

		//debugger;

		//col1.Value = "BBB";
		//col3.Value = "CCC";

		//col3.RequiredLevel = OptionSet.FieldRequiredLevel.None;

		//console.log(col3.Disabled);
		//col3.Disabled = true;
		//var columnEmail = devKit.LoadGridColumn(row0, "emailaddress1");
		//var a1 = columnEmail.Name;
		//row.Columns.
		//row.Columns.forEach(function (col) {
		//	//col.Name entity.attributes.get("fullname").getName()
		//	//col.RequiredLevel entity.attributes.get("fullname").getRequiredLevel() set
		//	//col.Value entity.attributes.get("fullname").getValue() set
		//	//col.SetNotification
		//	//col.ClearNotification
		//	//col.Disabled
		//});

		//setTimeout(function () {
		//	console.log("AAA");
		//	col2.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
		//}, 10000);



		//column.EntityName entity.getEntityName()
		//column.EntityReference entity.getEntityReference()
		//column.EntityId entity.getId();
		//column.PrimaryAttributeValue entity.getPrimaryAttributeValue()
		//column.Name entity.attributes.get("fullname").getName()
		//column.RequiredLevel entity.attributes.get("fullname").getRequiredLevel() set
		//column.Value entity.attributes.get("fullname").getValue() set
		//column.SetNotification
		//column.ClearNotification
		//column.Label
		//column.Disabled
		//debugger;
    }

	async function onSave(executionContext) {
		executionContext.getEventArgs().preventDefault();
		var form = new LuckyStar.FormAccount(executionContext);
		var p = form.Process;
		p.EnabledProcesses(function (processes) {
			//{"bc14a370-45e2-4d7e-badf-6b42d8234763":"BPF Account 1","60418618-39c6-420e-89e1-2bcd8212d002":"BPF Account 3"}
			//debugger;
		});
		p.ProcessInstances(function (processes) {
			//debugger;
		});
		var a = p.ActiveProcess;
		p.ActiveProcess.Stages.forEach(function (stage, index) {
			//debugger;
			stage.Steps.forEach(function (step, index) {
				debugger;
				var a = step.Attribute;
				debugger;
			});
		});
		var s = p.SelectedStage;
		var b = p.ActiveStage;
		p.ActivePath.forEach(function (stage, index) {
			debugger;
		});
		debugger;

		form.Utility.OrganizationSettings.BaseCurrencyId

	}
	function recordSelect(executionContext) {
		//var form = new LuckyStar.FormAccount(executionContext);
		//var row = form.Grid.Contacts.OnRecordSelect;
		//debugger;
		//var col = row.Columns.get("firstname");
		//col.Disabled = true;
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave,
		RecordSelect: recordSelect
	};
})();