


// UPDATE

// Update Ticket
router.put('/:id/update', ticket_controller.ticket_update);

// Update Comment
router.put('/:id/update', comment_controller.comment_update);

// Update User
router.put('/:id/update', user_controller.user_update);

// Update Hardware
router.put('/:id/update', hardware_controller.hardware_update);

// Update Software
router.put('/:id/update', software_controller.software_update);
