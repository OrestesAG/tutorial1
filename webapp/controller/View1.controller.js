sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View1", {
            onInit: function () {
                const oCitiesModel = new JSONModel([
                    {
                        "name": "Madrid"
                    },
                    {
                        "name": "Londres"
                    },
                    {
                        "name": "Berlin"
                    },
                    {
                        "name": "Paris"
                    },
                    {
                        "name": "Lisboa"
                    },
                    {
                        "name": "Roma"
                    },
                    {
                        "name": "Atenas"
                    }
                ]);
                //oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },

            onSayHello: function () {

                /*sap.m.MessageToast.show("Hello World!", {
                    duration: 3000, 
                });*/


                if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();
            },

            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },

            onNavigateToView2: function () {
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("RouteView2");
            }
        });
    });
