Ext.define('DEMO.view.vendors.VendorManagement' ,{
    extend	: 'Ext.panel.Panel',
    alias : 'widget.VendorManagement',

	layout	: 'card',
	activeItem: 0,
	
    autoScroll  : true,

	items : [
		// {
			// xtype	: 'CustomerEdit'
		// },
		// {
			// xtype	: 'CustmomerOrders'
		// }
	],

	// Add the top toolbar
	dockedItems : [{
		// xtype: 'CustomerMgmtToolbar',
		// dock: 'top'
	}],

	
    initComponent: function() {
        this.callParent(arguments);
    }
	
	
});