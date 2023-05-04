router.route('/review').post(authMiddleware, createReview).delete(authMiddleware, deleteReview);
