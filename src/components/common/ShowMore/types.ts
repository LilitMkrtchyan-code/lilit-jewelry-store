export type ShowMoreProps = {
  isLoading: boolean;
  onClick: () => void;
  hasMore: boolean | undefined;
  currentCount: number;
  totalCount: number;
};
