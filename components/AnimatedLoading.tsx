const AnimatedLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-all duration-200 ease-in-out">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
        <span className="absolute text-gray-900 dark:text-white">
          Loading Assets...
        </span>
      </div>
    </div>
  );
};

export default AnimatedLoading;
