import { mutateAsync } from '../../lib/helpers/actions';

export const createUpdateDashboardQuery = (dashboardId, newName) => ({
    body: {
        name: newName,
    },
    update: {
        dashboardsById: (prevDashboardsById, newDashboardsById) => ({
            ...prevDashboardsById,
            ...newDashboardsById,
        }),
    },
    url: `/api/${dashboardId}/update`,
});

export const updateDashboard = (dashboardId, newName) => {
    return mutateAsync(createUpdateDashboardQuery(dashboardId, newName));
};

export const dashboardByIdSelector = dashboardId => state => {
    if (state.entities.dashboardsById) {
        return state.entities.dashboardsById[dashboardId];
    } else {
        return undefined;
    }
};
