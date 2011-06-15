Ext.define('DEMO.controller.LayoutController', {
    extend: 'Ext.app.Controller',
    views: [
		'layout.AppHeader',
		'layout.ListsContainer',
		'layout.ManagementArea',
		'customers.CustomerManagement',
		'vendors.VendorManagement'
    ],

    init: function() {

        this.control({
			'ManagementArea' : {
				tabchange: this.tabChanged
			}
        });
    },


	tabChanged: function(tabPanel, tab) {
		tabXType = tab.getXType();

		var lists_container = Ext.ComponentQuery.query('ListsContainer');

		switch(tabXType)
		{
			case 'CustomerManagement':
				var customers	= Ext.ComponentQuery.query('CustomerList');
				var vendors 	= Ext.ComponentQuery.query('VendorList');
				
				vendors[0].setVisible(false);
				customers[0].setVisible(true);
				
				lists_container[0].setTitle('Customers');
				
				break;

			case 'VendorManagement':
				var customers	= Ext.ComponentQuery.query('CustomerList');
				var vendors		= Ext.ComponentQuery.query('VendorList');
				
				customers[0].setVisible(false);
				vendors[0].setVisible(true);
				
				lists_container[0].setTitle('Vendors');
				
				break;

			default:
				alert('An unknown tab was clicked.');
				break;
		}
		
	}

});