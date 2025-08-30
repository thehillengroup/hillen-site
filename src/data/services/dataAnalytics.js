// src/data/services/dataAnalytics.js
import {
  DatabaseIcon,
  AnalyticsIcon,
  LayersIcon,
  ClipboardIcon,
  LightbulbIcon,
  RadarIcon,
} from '../icons';

const dataAnalyticsCards = [
  {
    id: 'data-platforms',
    title: 'Data Platforms & Warehouses',
    desc:
      'Modern data lakes/warehouses (BigQuery, Snowflake, Redshift, Postgres) with reliable ELT/ETL and ingestion.',
    Icon: DatabaseIcon,
  },
  {
    id: 'bi-dashboards',
    title: 'BI & Dashboards',
    desc:
      'Executive and operational dashboards (Looker, Power BI, Superset): trusted KPIs, drilldowns, self-service.',
    Icon: AnalyticsIcon,
  },
  {
    id: 'data-modeling',
    title: 'Modeling & Semantics',
    desc:
      'Dimensional modeling, semantic layers, metrics catalogs, and versioned transformations with dbt.',
    Icon: LayersIcon,
  },
  {
    id: 'governance-quality',
    title: 'Governance & Data Quality',
    desc:
      'Cataloging, lineage, PII handling, validation tests, SLAs/SLOs, and privacy/compliance readiness.',
    Icon: ClipboardIcon,
  },
  {
    id: 'ml-ai',
    title: 'ML/AI Enablement',
    desc:
      'Feature stores, model serving, evaluation, and MLOps—aligned to measurable mission outcomes.',
    Icon: LightbulbIcon,
  },
  {
    id: 'streaming',
    title: 'Streaming & Eventing',
    desc:
      'Real-time ingestion and processing (Kafka, Kinesis, Pub/Sub) with event-driven architectures.',
    Icon: RadarIcon,
  },
];

export default dataAnalyticsCards;
