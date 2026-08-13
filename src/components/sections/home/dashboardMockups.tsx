import type { ComponentType } from "react";
import type { ServiceConfig } from "@/data/content";
import { WebAnalyticsMockup } from "./WebAnalyticsMockup";
import { AppDashboardMockup } from "./AppDashboardMockup";
import { ErpOperationsMockup } from "./ErpOperationsMockup";
import { CrmPipelineMockup } from "./CrmPipelineMockup";
import { MarketingFunnelMockup } from "./MarketingFunnelMockup";
import { SocialReelMockup } from "./SocialReelMockup";

export const DASHBOARD_MOCKUPS: Record<string, ComponentType<{ service: ServiceConfig }>> = {
  "website-development": WebAnalyticsMockup,
  "app-development": AppDashboardMockup,
  "erp-solutions": ErpOperationsMockup,
  "crm-solutions": CrmPipelineMockup,
  "digital-marketing": MarketingFunnelMockup,
  "social-media-management": SocialReelMockup,
};
