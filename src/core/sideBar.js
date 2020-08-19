const sideBar = [
  {
    listsId: 1,
    listsTitle: 'BuyerPO',
    listsIcon: 'fab fa-creative-commons',
    list: [
      {
        title: 'Issued',
        url: 'issued',
      },
      {
        title: 'InProgress(Summary)',
        url: 'inProgressSummary',
      },
      {
        title: 'InProgress(DCPO)',
        url: 'inProgressDcpo',
      },
      {
        title: 'Expired',
        url: 'expired',
      },
      {
        title: 'Finished',
        url: 'finished',
      },
      {
        title: 'All',
        url: 'all',
      },
      {
        title: 'InProgress(Summary)',
        url: 'inProgress',
      },
    ],
  },
  {
    listsId: 2,
    listsTitle: 'AccounbtReceivable',
    listsIcon: 'fab fa-creative-commons-by',
    list: [
      {
        title: 'Invoice Unissued',
        url: 'invoiceUnissued',
      },
      {
        title: 'Invoice Issued',
        url: 'invoiceIssued',
      },
      {
        title: 'Invoice Rejectd',
        url: 'invoiceRejectd',
      },
    ],
  },
  {
    listsId: 3,
    listsTitle: 'SupplierPO',
    listsIcon: 'fab fa-creative-commons-nc',
    list: [
      {
        title: 'Fabric Candidate',
        url: 'fabricCandidate',
      },
      {
        title: 'Subsidiary Candidate',
        url: 'subsidiaryCandidate',
      },
      {
        title: 'Purchase Order',
        url: 'purchaseOrder',
      },
    ],
  },
];

export { sideBar };
