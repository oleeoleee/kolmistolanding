import type { ServiceItem, ServiceOption } from "@/content/brand-types";

export function toServiceOptions(services: ServiceItem[]): ServiceOption[] {
  return services.map((service) => ({
    value: service.id,
    label: service.label,
  }));
}
