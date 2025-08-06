import { BadgeType } from 'src/components/StatusBadge';

const transformStatus = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return 'approved' as BadgeType;
    case 'REJECTED':
      return 'rejected' as BadgeType;
    case 'pending':
      return 'pending' as BadgeType;
    case 'reimbursed':
      return 'reimbursed' as BadgeType;
    default:
      return 'pending' as BadgeType;
  }
};

export default transformStatus;
