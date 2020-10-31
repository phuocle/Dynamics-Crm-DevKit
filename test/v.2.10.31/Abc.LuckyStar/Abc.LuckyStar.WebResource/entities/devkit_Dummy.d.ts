//@ts-check
///<reference path="devkit.d.ts" />
declare namespace LuckyStar {
	namespace FormDummy {
		interface Body {
			devkit_KbSearch: DevKit.Controls.Knowledge;
		}
	}
	class FormDummy extends DevKit.IForm {
		constructor(executionContext: any, defaultWebResourceName?: string);
		Body: LuckyStar.FormDummy.Body;
	}
}